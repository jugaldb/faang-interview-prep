// Interactive roadmap. Renders window.ROADMAP_DATA into <div id="roadmap-app">.
// Loads on every page; does nothing when #roadmap-app is absent. Progress lives in localStorage.
(function () {
  "use strict";

  var STORE_KEY = "fip-roadmap-v1";
  var FILE_NAME = "faang-roadmap-progress.json";
  var instance = 0;

  // ---------- small helpers ----------
  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "text") el.textContent = v;
        else if (k === "className") el.className = v;
        else if (k.indexOf("on") === 0 && typeof v === "function") el.addEventListener(k.slice(2), v);
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, String(v));
      });
    }
    (children || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }

  function fmtHours(n) {
    var r = Math.round(n * 10) / 10;
    return (r % 1 === 0 ? String(r) : r.toFixed(1)) + " h";
  }

  function fill(str, obj) {
    return String(str).replace(/\{(\w+)\}/g, function (m, k) {
      return obj[k] !== undefined ? obj[k] : m;
    });
  }

  function storageGet() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function storageSet(state) {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch (e) {
      /* private mode or blocked storage: the app still works for this visit */
    }
  }

  // ---------- links ----------
  function siteBase() {
    var el = document.querySelector("#__config");
    if (!el) return null;
    try {
      var cfg = JSON.parse(el.textContent);
      if (cfg && typeof cfg.base === "string") {
        var b = cfg.base;
        if (b.charAt(b.length - 1) !== "/") b += "/";
        return b;
      }
    } catch (e) {
      /* fall through */
    }
    return null;
  }

  function isExternal(href) {
    return /^https?:\/\//i.test(href);
  }

  function resolveHref(href, base) {
    if (isExternal(href)) return href;
    if (base !== null) {
      try {
        return new URL(base + href, window.location.href).href;
      } catch (e) {
        /* fall through */
      }
    }
    // The roadmap page is served at <site>/roadmap/, one level below the site root.
    return "../" + href;
  }

  // ---------- state ----------
  function defaults(data) {
    return {
      track: "newgrad",
      weeks: data.timelines.indexOf(8) >= 0 ? 8 : data.timelines[0],
      companies: [],
      done: {},
      collapsed: {},
      tag: "",
      hideDone: false
    };
  }

  function sanitize(raw, data) {
    var s = defaults(data);
    if (!raw || typeof raw !== "object") return s;
    var trackIds = data.tracks.map(function (t) { return t.id; });
    var slugs = data.companies.map(function (c) { return c.slug; });
    if (trackIds.indexOf(raw.track) >= 0) s.track = raw.track;
    if (data.timelines.indexOf(Number(raw.weeks)) >= 0) s.weeks = Number(raw.weeks);
    if (Array.isArray(raw.companies)) {
      s.companies = raw.companies.filter(function (x, i, arr) {
        return slugs.indexOf(x) >= 0 && arr.indexOf(x) === i;
      });
    }
    if (raw.done && typeof raw.done === "object") {
      Object.keys(raw.done).forEach(function (k) {
        if (raw.done[k] === true && /^[a-z0-9-]+$/.test(k)) s.done[k] = true;
      });
    }
    if (raw.collapsed && typeof raw.collapsed === "object") {
      data.phases.forEach(function (p) {
        if (raw.collapsed[p.id] === true) s.collapsed[p.id] = true;
      });
    }
    if (typeof raw.tag === "string" && (raw.tag === "" || data.tags[raw.tag])) s.tag = raw.tag;
    s.hideDone = raw.hideDone === true;
    return s;
  }

  // ---------- task list for the current selection ----------
  function companyTask(tpl, c) {
    var vars = {
      name: c.name, slug: c.slug, framework: c.framework,
      behavioral: c.behavioral, behavioralLabel: c.behavioralLabel
    };
    var links = tpl.links.map(function (l) {
      return { label: fill(l.label, vars), href: fill(l.href, vars) };
    });
    if (tpl.key === "process" && c.posts) links = links.concat(c.posts);
    if (tpl.key === "stories" && c.valuesLink) links = links.concat([c.valuesLink]);
    return {
      id: "co-" + c.slug + "-" + tpl.key,
      phase: tpl.phase,
      tracks: null,
      title: fill(tpl.title, vars),
      detail: fill(tpl.detail, vars),
      links: links,
      hours: tpl.hours,
      tags: tpl.tags.slice(),
      company: c.name
    };
  }

  function buildTasks(data, state) {
    var byPhase = {};
    data.phases.forEach(function (p) { byPhase[p.id] = []; });
    data.tasks.forEach(function (t) {
      if (t.tracks.indexOf(state.track) >= 0 && byPhase[t.phase]) byPhase[t.phase].push(t);
    });
    var chosen = state.companies.map(function (slug) {
      for (var i = 0; i < data.companies.length; i++) {
        if (data.companies[i].slug === slug) return data.companies[i];
      }
      return null;
    }).filter(Boolean);
    (data.companyTasks || []).forEach(function (tpl) {
      var list = byPhase[tpl.phase];
      if (!list || !chosen.length) return;
      var extra = chosen.map(function (c) { return companyTask(tpl, c); });
      var at = -1;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === tpl.after) { at = i; break; }
      }
      // Insert after the anchor task, after any company tasks already placed there.
      if (at >= 0) {
        var pos = at + 1;
        while (pos < list.length && list[pos].company) pos++;
        Array.prototype.splice.apply(list, [pos, 0].concat(extra));
      } else {
        Array.prototype.push.apply(list, extra);
      }
    });
    return byPhase;
  }

  function weekRanges(data, byPhase, weeks) {
    var hours = data.phases.map(function (p) {
      return byPhase[p.id].reduce(function (s, t) { return s + (Number(t.hours) || 0); }, 0);
    });
    var total = hours.reduce(function (a, b) { return a + b; }, 0);
    var out = {};
    var cum = 0;
    data.phases.forEach(function (p, i) {
      if (!total || !hours[i]) { out[p.id] = null; return; }
      var start = Math.floor((cum / total) * weeks) + 1;
      cum += hours[i];
      var end = Math.ceil((cum / total) * weeks - 1e-9);
      start = Math.min(start, weeks);
      end = Math.max(start, Math.min(end, weeks));
      out[p.id] = { start: start, end: end };
    });
    return { ranges: out, total: total, phaseHours: hours };
  }

  function weekLabel(r) {
    if (!r) return "";
    return r.start === r.end ? "Week " + r.start : "Weeks " + r.start + " to " + r.end;
  }

  // ---------- app ----------
  function init() {
    var root = document.getElementById("roadmap-app");
    var data = window.ROADMAP_DATA;
    if (!root || !data || root.getAttribute("data-ready") === "1") return;
    root.setAttribute("data-ready", "1");
    instance += 1;
    var uid = "rm" + instance;

    var base = siteBase();
    var state = sanitize(storageGet(), data);
    var view = {}; // current computed tasks
    var refs = {}; // persistent control elements

    function persist() { storageSet(state); }

    function announce(msg) {
      refs.status.textContent = "";
      window.setTimeout(function () { refs.status.textContent = msg; }, 30);
    }

    // ----- link list -----
    function linkList(links) {
      if (!links || !links.length) return null;
      return h("p", { className: "rm-links" }, links.map(function (l) {
        var ext = isExternal(l.href);
        return h("a", {
          href: resolveHref(l.href, base),
          target: ext ? "_blank" : null,
          rel: ext ? "noopener" : null,
          text: l.label
        });
      }));
    }

    // ----- task item (used in phases and in Next up) -----
    function taskItem(t, where, phaseTitle, range) {
      var done = !!state.done[t.id];
      var boxId = uid + "-" + where + "-" + t.id;
      var box = h("input", { type: "checkbox", id: boxId, className: "rm-box", "data-task": t.id });
      box.checked = done;
      box.addEventListener("change", function () { toggle(t.id, box.checked, box); });
      var metaBits = [fmtHours(t.hours)];
      if (where === "next") metaBits.unshift(phaseTitle + (range ? ", " + weekLabel(range).toLowerCase() : ""));
      metaBits.push(t.tags.map(function (tg) { return data.tags[tg] || tg; }).join(", "));
      var li = h("li", {
        className: "rm-task" + (done ? " is-done" : ""),
        id: where === "list" ? uid + "-task-" + t.id : null,
        "data-task": t.id
      }, [
        box,
        h("div", { className: "rm-task-body" }, [
          h("label", { "for": boxId, className: "rm-task-title", text: t.title }),
          h("p", { className: "rm-task-detail", text: t.detail }),
          linkList(t.links),
          h("p", { className: "rm-task-meta", text: metaBits.join(". ") })
        ])
      ]);
      return li;
    }

    // ----- controls (rendered once) -----
    function buildControls() {
      var trackField = h("fieldset", { className: "rm-field" }, [h("legend", { text: "Track" })]);
      var seg = h("div", { className: "rm-seg" });
      refs.trackInputs = [];
      data.tracks.forEach(function (t) {
        var id = uid + "-track-" + t.id;
        var input = h("input", { type: "radio", name: uid + "-track", id: id, value: t.id });
        input.checked = state.track === t.id;
        input.addEventListener("change", function () {
          if (!input.checked) return;
          state.track = t.id;
          persist();
          renderBody();
        });
        refs.trackInputs.push(input);
        seg.appendChild(input);
        seg.appendChild(h("label", { "for": id, text: t.label }));
      });
      trackField.appendChild(seg);

      refs.weeks = h("select", { id: uid + "-weeks" }, data.timelines.map(function (w) {
        return h("option", { value: w, text: w + " weeks" });
      }));
      refs.weeks.value = String(state.weeks);
      refs.weeks.addEventListener("change", function () {
        state.weeks = Number(refs.weeks.value);
        persist();
        renderBody();
      });

      var tagKeys = Object.keys(data.tags);
      refs.tag = h("select", { id: uid + "-tag" }, [h("option", { value: "", text: "All tasks" })].concat(
        tagKeys.map(function (k) { return h("option", { value: k, text: data.tags[k] }); })
      ));
      refs.tag.value = state.tag;
      refs.tag.addEventListener("change", function () {
        state.tag = refs.tag.value;
        persist();
        renderBody();
      });

      refs.hide = h("input", { type: "checkbox", id: uid + "-hide" });
      refs.hide.checked = state.hideDone;
      refs.hide.addEventListener("change", function () {
        state.hideDone = refs.hide.checked;
        persist();
        renderBody();
      });

      // Company picker
      refs.companyInputs = {};
      var filter = h("input", {
        type: "search", id: uid + "-cfilter", className: "rm-cfilter",
        placeholder: "Filter companies", "aria-label": "Filter companies", autocomplete: "off"
      });
      var clist = h("ul", { className: "rm-company-list" });
      data.companies.forEach(function (c) {
        var id = uid + "-co-" + c.slug;
        var input = h("input", { type: "checkbox", id: id, value: c.slug });
        input.checked = state.companies.indexOf(c.slug) >= 0;
        input.addEventListener("change", function () { setCompany(c.slug, input.checked); });
        refs.companyInputs[c.slug] = input;
        clist.appendChild(h("li", { "data-name": c.name.toLowerCase() }, [input, h("label", { "for": id, text: c.name })]));
      });
      filter.addEventListener("input", function () {
        var q = filter.value.trim().toLowerCase();
        Array.prototype.forEach.call(clist.children, function (li) {
          li.hidden = q !== "" && li.getAttribute("data-name").indexOf(q) < 0;
        });
      });
      refs.companySummary = h("summary", {});
      refs.picker = h("details", { className: "rm-picker" }, [
        refs.companySummary,
        h("div", { className: "rm-picker-body" }, [
          h("p", { className: "rm-hint", text: "Each company adds 3 tasks: read its process, solve its top 20 problems, prepare stories for its values." }),
          filter,
          clist
        ])
      ]);
      refs.chips = h("div", { className: "rm-chips", "aria-label": "Selected companies" });

      // Data buttons
      refs.file = h("input", { type: "file", accept: "application/json,.json", className: "rm-file", tabindex: "-1", "aria-hidden": "true" });
      refs.file.addEventListener("change", importFile);
      var exportBtn = h("button", { type: "button", className: "rm-btn", text: "Export progress", onclick: exportState });
      var importBtn = h("button", { type: "button", className: "rm-btn", text: "Import progress", onclick: function () { refs.file.value = ""; refs.file.click(); } });
      var resetBtn = h("button", { type: "button", className: "rm-btn rm-btn-quiet", text: "Reset", onclick: resetAll });
      refs.status = h("p", { className: "rm-status", role: "status", "aria-live": "polite" });

      return h("div", { className: "rm-top" }, [
        h("div", { className: "rm-controls" }, [
          trackField,
          h("div", { className: "rm-field" }, [h("label", { "for": uid + "-weeks", text: "Timeline" }), refs.weeks]),
          h("div", { className: "rm-field" }, [h("label", { "for": uid + "-tag", text: "Show" }), refs.tag]),
          h("div", { className: "rm-field rm-inline" }, [refs.hide, h("label", { "for": uid + "-hide", text: "Hide completed" })])
        ]),
        refs.picker,
        refs.chips,
        h("div", { className: "rm-actions" }, [exportBtn, importBtn, resetBtn, refs.file]),
        refs.status
      ]);
    }

    function syncControls() {
      refs.trackInputs.forEach(function (i) { i.checked = i.value === state.track; });
      refs.weeks.value = String(state.weeks);
      refs.tag.value = state.tag;
      refs.hide.checked = state.hideDone;
      Object.keys(refs.companyInputs).forEach(function (slug) {
        refs.companyInputs[slug].checked = state.companies.indexOf(slug) >= 0;
      });
    }

    function renderChips() {
      var n = state.companies.length;
      refs.companySummary.textContent = "Target companies (" + (n ? n + " selected" : "none selected") + ")";
      refs.chips.textContent = "";
      state.companies.forEach(function (slug) {
        var c = data.companies.filter(function (x) { return x.slug === slug; })[0];
        if (!c) return;
        refs.chips.appendChild(h("span", { className: "rm-chip" }, [
          c.name,
          h("button", {
            type: "button", className: "rm-chip-x", "aria-label": "Remove " + c.name, text: "\u00d7",
            onclick: function () {
              setCompany(slug, false);
              refs.companySummary.focus();
            }
          })
        ]));
      });
    }

    function setCompany(slug, on) {
      var i = state.companies.indexOf(slug);
      if (on && i < 0) state.companies.push(slug);
      if (!on && i >= 0) state.companies.splice(i, 1);
      if (refs.companyInputs[slug]) refs.companyInputs[slug].checked = on;
      persist();
      renderBody();
    }

    // ----- body (re-rendered on any selection change) -----
    function renderBody() {
      renderChips();
      var byPhase = buildTasks(data, state);
      var wk = weekRanges(data, byPhase, state.weeks);
      view = { byPhase: byPhase, wk: wk };

      refs.body.textContent = "";

      // Summary
      refs.summaryText = h("p", { className: "rm-summary-text" });
      refs.bar = h("div", { className: "rm-bar", role: "progressbar", "aria-label": "Overall progress", "aria-valuemin": "0", "aria-valuemax": "100" }, [h("span", {})]);
      refs.body.appendChild(h("section", { className: "rm-summary" }, [refs.summaryText, refs.bar]));

      // Next up
      refs.nextList = h("ol", { className: "rm-next-list" });
      refs.nextHeading = h("h2", { className: "rm-next-h", id: uid + "-next", tabindex: "-1", text: "Next up" });
      refs.body.appendChild(h("section", { className: "rm-next", "aria-labelledby": uid + "-next" }, [refs.nextHeading, refs.nextList]));

      // Expand / collapse all
      refs.body.appendChild(h("div", { className: "rm-actions rm-actions-small" }, [
        h("button", { type: "button", className: "rm-btn rm-btn-quiet", text: "Expand all", onclick: function () { setAllCollapsed(false); } }),
        h("button", { type: "button", className: "rm-btn rm-btn-quiet", text: "Collapse all", onclick: function () { setAllCollapsed(true); } })
      ]));

      // Phases
      refs.phases = {};
      data.phases.forEach(function (p, idx) {
        var tasks = byPhase[p.id];
        if (!tasks.length) return;
        var shown = tasks.filter(function (t) { return !state.tag || t.tags.indexOf(state.tag) >= 0; });
        if (state.tag && !shown.length) return;
        var panelId = uid + "-panel-" + p.id;
        var collapsed = !!state.collapsed[p.id];
        var meta = h("span", { className: "rm-phase-meta" });
        var toggleBtn = h("button", {
          type: "button", className: "rm-phase-toggle", "aria-expanded": collapsed ? "false" : "true", "aria-controls": panelId
        }, [h("span", { className: "rm-phase-title", text: (idx + 1) + ". " + p.title }), meta]);
        var bar = h("div", { className: "rm-bar rm-bar-thin", role: "progressbar", "aria-label": p.title + " progress", "aria-valuemin": "0", "aria-valuemax": "100" }, [h("span", {})]);
        var list = h("ul", { className: "rm-tasks" }, shown.map(function (t) { return taskItem(t, "list"); }));
        var empty = h("p", { className: "rm-empty", text: "Everything in this phase is done." });
        var panel = h("div", { className: "rm-panel", id: panelId }, [h("p", { className: "rm-phase-summary", text: p.summary }), list, empty]);
        panel.hidden = collapsed;
        toggleBtn.addEventListener("click", function () {
          var open = toggleBtn.getAttribute("aria-expanded") === "true";
          toggleBtn.setAttribute("aria-expanded", open ? "false" : "true");
          panel.hidden = open;
          if (open) state.collapsed[p.id] = true; else delete state.collapsed[p.id];
          persist();
        });
        var section = h("section", { className: "rm-phase", id: p.id, "aria-label": p.title }, [
          h("h2", { className: "rm-phase-h" }, [toggleBtn]), bar, panel
        ]);
        refs.phases[p.id] = { section: section, meta: meta, bar: bar, list: list, empty: empty, toggle: toggleBtn, panel: panel };
        refs.body.appendChild(section);
      });
      if (!Object.keys(refs.phases).length) {
        refs.body.appendChild(h("p", { className: "rm-empty", text: "No tasks match this filter." }));
      }
      refreshStatus(null);
    }

    function setAllCollapsed(c) {
      Object.keys(refs.phases).forEach(function (id) {
        var ph = refs.phases[id];
        ph.toggle.setAttribute("aria-expanded", c ? "false" : "true");
        ph.panel.hidden = c;
        if (c) state.collapsed[id] = true; else delete state.collapsed[id];
      });
      persist();
    }

    function setBar(bar, pct) {
      bar.setAttribute("aria-valuenow", String(pct));
      bar.setAttribute("aria-valuetext", pct + "%");
      bar.firstChild.style.width = pct + "%";
    }

    // Update counts, bars, done states and Next up without rebuilding the phases.
    function refreshStatus(focusHint) {
      var all = [];
      data.phases.forEach(function (p) { all = all.concat(view.byPhase[p.id]); });
      var doneCount = all.filter(function (t) { return state.done[t.id]; }).length;
      var left = all.filter(function (t) { return !state.done[t.id]; })
        .reduce(function (s, t) { return s + (Number(t.hours) || 0); }, 0);
      var pct = all.length ? Math.round((doneCount / all.length) * 100) : 0;
      var perWeek = Math.ceil(view.wk.total / state.weeks);
      refs.summaryText.textContent = doneCount + " of " + all.length + " tasks done (" + pct + "%). " +
        "Plan: about " + Math.round(view.wk.total) + " hours over " + state.weeks + " weeks, about " + perWeek +
        " hours a week. " + Math.round(left) + " hours left.";
      setBar(refs.bar, pct);

      data.phases.forEach(function (p, i) {
        var ph = refs.phases[p.id];
        if (!ph) return;
        var tasks = view.byPhase[p.id];
        var d = tasks.filter(function (t) { return state.done[t.id]; }).length;
        var ppct = tasks.length ? Math.round((d / tasks.length) * 100) : 0;
        var bits = [];
        var wl = weekLabel(view.wk.ranges[p.id]);
        if (wl) bits.push(wl);
        bits.push(d + " of " + tasks.length + " done");
        bits.push(fmtHours(view.wk.phaseHours[i]));
        ph.meta.textContent = bits.join(". ");
        setBar(ph.bar, ppct);
        var visible = 0;
        Array.prototype.forEach.call(ph.list.children, function (li) {
          var id = li.getAttribute("data-task");
          var isDone = !!state.done[id];
          li.classList.toggle("is-done", isDone);
          var box = li.querySelector("input[type=checkbox]");
          if (box) box.checked = isDone;
          li.hidden = state.hideDone && isDone;
          if (!li.hidden) visible++;
        });
        ph.empty.hidden = visible > 0 || !ph.list.children.length;
      });

      // Next up: first 5 unchecked tasks in phase order (ignores the tag filter).
      refs.nextList.textContent = "";
      var next = [];
      data.phases.forEach(function (p) {
        view.byPhase[p.id].forEach(function (t) {
          if (!state.done[t.id] && next.length < 5) next.push({ t: t, p: p });
        });
      });
      next.forEach(function (n) {
        refs.nextList.appendChild(taskItem(n.t, "next", n.p.title, view.wk.ranges[n.p.id]));
      });
      if (!next.length) {
        refs.nextList.appendChild(h("li", { className: "rm-empty", text: "All tasks are done. Pick another target company or a longer track." }));
      }

      if (focusHint) restoreFocus(focusHint);
    }

    function restoreFocus(hint) {
      var target = null;
      if (hint.where === "next") {
        target = refs.nextList.querySelector("input[type=checkbox]") || refs.nextHeading;
      } else if (hint.where === "list") {
        var li = hint.li;
        if (li && li.hidden) {
          var sib = li.nextElementSibling;
          while (sib && sib.hidden) sib = sib.nextElementSibling;
          if (!sib) {
            sib = li.previousElementSibling;
            while (sib && sib.hidden) sib = sib.previousElementSibling;
          }
          target = sib ? sib.querySelector("input[type=checkbox]") : (hint.phaseToggle || null);
        }
      }
      if (target && typeof target.focus === "function") target.focus();
    }

    function toggle(id, checked, box) {
      if (checked) state.done[id] = true; else delete state.done[id];
      persist();
      var li = box.closest("li");
      var where = refs.nextList.contains(box) ? "next" : "list";
      var hint = { where: where, li: where === "list" ? li : null, phaseToggle: null };
      if (where === "list") {
        var sec = box.closest(".rm-phase");
        if (sec) hint.phaseToggle = sec.querySelector(".rm-phase-toggle");
      }
      refreshStatus(hint);
    }

    // ----- export / import / reset -----
    function exportState() {
      var payload = { app: "faang-interview-prep-roadmap", version: data.version, exportedAt: new Date().toISOString(), state: state };
      try {
        var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        var url = URL.createObjectURL(blob);
        var a = h("a", { href: url, download: FILE_NAME });
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        announce("Progress exported as " + FILE_NAME + ".");
      } catch (e) {
        announce("Export failed in this browser.");
      }
    }

    function importFile() {
      var f = refs.file.files && refs.file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var parsed = JSON.parse(String(reader.result));
          var raw = parsed && parsed.state ? parsed.state : parsed;
          if (!raw || typeof raw !== "object" || !raw.done) throw new Error("bad file");
          state = sanitize(raw, data);
          persist();
          syncControls();
          renderBody();
          var n = Object.keys(state.done).length;
          announce("Progress imported: " + n + (n === 1 ? " task" : " tasks") + " marked done.");
        } catch (e) {
          announce("That file is not a roadmap export. Nothing changed.");
        }
      };
      reader.onerror = function () { announce("Could not read that file. Nothing changed."); };
      reader.readAsText(f);
    }

    function resetAll() {
      if (!window.confirm("Reset the roadmap? This clears your checked tasks, companies and settings in this browser.")) return;
      state = defaults(data);
      persist();
      syncControls();
      renderBody();
      announce("Roadmap reset.");
    }

    // ----- mount -----
    root.textContent = "";
    root.classList.add("rm");
    root.appendChild(buildControls());
    refs.body = h("div", { className: "rm-body" });
    root.appendChild(refs.body);

    // Hide the static checklist and hand its heading ids to the live phases,
    // so the table of contents links land on the interactive version.
    var statics = document.querySelectorAll(".roadmap-static");
    Array.prototype.forEach.call(statics, function (s) {
      Array.prototype.forEach.call(s.querySelectorAll("[id]"), function (el) {
        el.setAttribute("data-static-id", el.id);
        el.removeAttribute("id");
      });
      s.hidden = true;
    });

    renderBody();

    // Jump to a phase if the URL has its hash.
    if (window.location.hash) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target && root.contains(target)) target.scrollIntoView();
    }
  }

  function safeInit() {
    try {
      init();
    } catch (e) {
      // Leave the static checklist visible if anything goes wrong.
      var statics = document.querySelectorAll(".roadmap-static");
      Array.prototype.forEach.call(statics, function (s) { s.hidden = false; });
      if (window.console && console.error) console.error("roadmap:", e);
    }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(safeInit);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", safeInit);
  } else {
    safeInit();
  }
})();

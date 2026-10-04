// Makes every "- [ ]" task list on the site clickable and remembers progress in this browser.
(function () {
  function keyFor(box, i) {
    var label = (box.closest("li") || box.parentElement).textContent.trim().slice(0, 80);
    return "fip:" + location.pathname + ":" + i + ":" + label;
  }
  function init() {
    var boxes = document.querySelectorAll(".md-typeset .task-list-item input[type=checkbox]");
    boxes.forEach(function (box, i) {
      var k = keyFor(box, i);
      box.disabled = false;
      try { box.checked = localStorage.getItem(k) === "1"; } catch (e) {}
      box.addEventListener("change", function () {
        try { localStorage.setItem(k, box.checked ? "1" : "0"); } catch (e) {}
      });
    });
  }
  if (window.document$ && window.document$.subscribe) { window.document$.subscribe(init); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();

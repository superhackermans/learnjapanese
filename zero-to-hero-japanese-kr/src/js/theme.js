/* ============================================================
   Zero to Hero — Theme Toggle (Dark/Light)
   ============================================================ */

(function () {
  'use strict';

  var toggle = document.getElementById('themeToggle');
  var html = document.documentElement;

  // Restore saved theme
  try {
    var saved = localStorage.getItem('zth-theme');
    if (saved === 'light') html.setAttribute('data-theme', 'light');
  } catch (e) {}

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isLight = html.getAttribute('data-theme') === 'light';
      if (isLight) {
        html.removeAttribute('data-theme');
        try { localStorage.setItem('zth-theme', 'dark'); } catch (e) {}
      } else {
        html.setAttribute('data-theme', 'light');
        try { localStorage.setItem('zth-theme', 'light'); } catch (e) {}
      }
    });
  }
})();

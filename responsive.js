/* ============================================================
   スマホ対応（共通）responsive.js
   すべてのページで読み込む。
   ハンバーガーメニューの開閉を担当する。
   ============================================================ */
(function () {
  function init() {
    var header = document.querySelector('header');
    var toggle = document.getElementById('navToggle');
    if (!header || !toggle) return;

    function closeMenu() {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // メニュー内のリンクをタップしたら閉じる
    var links = header.querySelectorAll('nav a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', closeMenu);
    }

    // メニューの外側をタップしたら閉じる
    document.addEventListener('click', function (e) {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

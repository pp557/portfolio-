(function () {
  "use strict";

  var nav = document.getElementById("primary-nav");
  var toggle = document.querySelector(".menu-toggle");
  var yearEl = document.getElementById("copyright-year");
  var navLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];
  var sections = document.querySelectorAll("main section[id]");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (yearEl) {
    var year = String(new Date().getFullYear());
    yearEl.textContent = year;
    yearEl.setAttribute("datetime", year);
  }

  function closeMenu() {
    if (!nav || !toggle) {
      return;
    }
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    if (!nav || !toggle) {
      return;
    }
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var hash = link.getAttribute("href");
      var target = hash ? document.querySelector(hash) : null;

      closeMenu();

      if (!target) {
        return;
      }

      if (prefersReducedMotion) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", hash);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", function (event) {
    if (!nav || !toggle) {
      return;
    }
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });

  function updateActiveLink() {
    var currentId = "home";
    var offset = 120;

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top - offset <= 0) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === "#" + currentId) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
})();

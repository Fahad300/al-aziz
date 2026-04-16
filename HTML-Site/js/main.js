/* Shared jQuery logic for all pages */
/* eslint-disable no-undef */

$(function () {
  var $navbar = $("#site-navbar");
  var $backTop = $("#back-to-top");

  var isHomeWithHero = $("body").hasClass("has-hero");

  // Navbar: transparent on hero load, solid on scroll
  function syncNavbar() {
    var y = $(window).scrollTop();

    if (!isHomeWithHero) {
      // Interior pages are always solid
      $navbar.addClass("scrolled");
      return;
    }

    if (y > 50) {
      $navbar.addClass("scrolled");
    } else {
      $navbar.removeClass("scrolled");
    }
  }

  syncNavbar();
  $(window).on("scroll", syncNavbar);

  // Back to top hex button
  function syncBackTop() {
    if ($(window).scrollTop() > 400) {
      $backTop.addClass("show");
    } else {
      $backTop.removeClass("show");
    }
  }

  syncBackTop();
  $(window).on("scroll", syncBackTop);

  $backTop.on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // Reveal animations
  function checkReveal() {
    var windowBottom = $(window).scrollTop() + $(window).height();
    $(".reveal").each(function () {
      var $el = $(this);
      var elTop = $el.offset().top;
      if (elTop < windowBottom - 60) {
        $el.addClass("visible");
      }
    });
  }

  checkReveal();
  $(window).on("scroll", checkReveal);

  // Smooth scroll for same-page anchors
  $(document).on("click", 'a[href^="#"]', function (e) {
    var href = $(this).attr("href");
    if (!href || href.length < 2) return;

    var $target = $(href);
    if ($target.length) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: $target.offset().top - 72 }, 650);
    }
  });

  // Active navbar link by current pathname
  (function setActiveNav() {
    var path = window.location.pathname || "";
    var currentFile = path.split("/").pop() || "index.html";

    var $links = $navbar.find('a.nav-link[href]');
    $links.removeClass("active");

    $links.each(function () {
      var href = $(this).attr("href") || "";
      // Match last segment (e.g., about.html)
      if (href.split("/").pop() === currentFile) {
        $(this).addClass("active");
      }
    });

    // Fallback: if running from a local file without pathname, activate index
    if ($links.filter(".active").length === 0 && currentFile === "") {
      $links.filter('[href="index.html"]').addClass("active");
    }
  })();

  // Clients marquee (clients page only)
  (function marqueeInit() {
    var $track = $(".client-marquee-track");
    if ($track.length === 0) return;

    // If only one set exists, duplicate it to enable seamless translateX(-50%)
    var $items = $track.find(".client-marquee-item");
    if ($items.length < 2) return;

    var hasDuplicate = $track.data("marquee-duplicated") === true;
    if (!hasDuplicate) {
      $items.clone().appendTo($track);
      $track.data("marquee-duplicated", true);
    }

    $("body").addClass("clients-marquee-ready");
  })();

  // Image fallback for placeholder images (keeps layout intact)
  (function imageFallbackInit() {
    $("img").each(function () {
      var img = this;
      var src = $(img).attr("src") || "";
      if (!src || src.indexOf("images/") !== 0) return;

      $(img).on("error", function () {
        var alt = $(img).attr("alt") || "Image";
        var safeText = alt.replace(/[<>&"]/g, "");
        var svg =
          '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">' +
          '<rect width="100%" height="100%" fill="#0a1a33"/>' +
          '<polygon points="400,40 650,170 650,330 400,460 150,330 150,170" fill="#f5a800" opacity="0.18"/>' +
          '<text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="22" fill="#f4f6f9">' +
          safeText +
          "</text></svg>";

        img.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
      });
    });
  })();
});


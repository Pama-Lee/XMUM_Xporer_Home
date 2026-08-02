"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* =====================================
		TESTIMONIALS SLIDER
	======================================== */
    var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 18,
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================
		NAVBAR BEHAVIOR
	======================================== */
    window.addEventListener("scroll", navBehavior);
    window.addEventListener("load", navBehavior);

    function navBehavior() {
        if (window.pageYOffset > 5) {
            document.querySelector(".navbar").classList.add("active");
        } else {
            document.querySelector(".navbar").classList.remove("active");
        }

        if (window.pageYOffset > 1000) {
            document.querySelector("#scrollTop").classList.add("active");
        } else {
            document.querySelector("#scrollTop").classList.remove("active");
        }
    }

    /* =====================================
		MOVE TO TOP OF THE PAGE
	======================================== */
    document
        .getElementById("scrollTop")
        .addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

    /* =====================================
		MOBILE NAVIGATION
	======================================== */
    var navigation = document.getElementById("navbarSupportedContent");
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992 && navigation.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(navigation).hide();
            }
        });
    });

    /* =====================================
		CURRENT YEAR
	======================================== */
    var currentYear = document.getElementById("currentYear");
    if (currentYear) currentYear.textContent = new Date().getFullYear();

    /* =====================================================
		BOOTSTRAP SCROLLSPY
	===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });
});

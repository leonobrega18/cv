/* ==========================================================
   app.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeSmoothScroll();

    initializeScrollSpy();

    initializeRevealAnimation();

    initializeBackToTop();

    initializeCertificationLinks();

    initializeDarkMode();

});

/* ==========================================================
NAVIGATION
========================================================== */

function initializeNavigation() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-shadow");

        } else {

            header.classList.remove("header-shadow");

        }

    });

}

/* ==========================================================
SMOOTH SCROLL
========================================================== */

function initializeSmoothScroll() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        });

    });

}

/* ==========================================================
SCROLL SPY
========================================================== */

function initializeScrollSpy() {

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (pageYOffset >= top && pageYOffset < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}

/* ==========================================================
REVEAL ANIMATION
========================================================== */

function initializeRevealAnimation() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(

        ".timeline-item,.card,.cert-card,.contact-card,.education-card,.language"

    ).forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

}

/* ==========================================================
BACK TO TOP
========================================================== */

function initializeBackToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.id = "backToTop";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

}

/* ==========================================================
CERTIFICATION LINKS
========================================================== */

function initializeCertificationLinks() {

    document.querySelectorAll(".cert-card").forEach(card => {

        card.addEventListener("click", () => {

            const url = card.dataset.url;

            if (url && url !== "") {

                window.open(url, "_blank");

            }

        });

    });

}

/* ==========================================================
DARK MODE
========================================================== */

function initializeDarkMode() {

    const button = document.createElement("button");

    button.id = "themeButton";

    button.innerHTML = "🌙";

    document.body.appendChild(button);

    let dark = localStorage.getItem("theme");

    if (dark === "dark") {

        document.body.classList.add("manual-dark");

        button.innerHTML = "☀";

    }

    button.onclick = () => {

        document.body.classList.toggle("manual-dark");

        if (document.body.classList.contains("manual-dark")) {

            localStorage.setItem("theme", "dark");

            button.innerHTML = "☀";

        } else {

            localStorage.removeItem("theme");

            button.innerHTML = "🌙";

        }

    };

}

/* ==========================================================
SKILL HOVER
========================================================== */

document.querySelectorAll(".skill-cloud span").forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.transform = "scale(1.08)";

    });

    skill.addEventListener("mouseleave", () => {

        skill.style.transform = "scale(1)";

    });

});

/* ==========================================================
COPY EMAIL
========================================================== */

const email = document.querySelector('a[href^="mailto"]');

if (email) {

    email.addEventListener("dblclick", () => {

        navigator.clipboard.writeText(email.textContent.trim());

        alert("Email copiado.");

    });

}

/* ==========================================================
COPY PHONE
========================================================== */

const phone = document.querySelector('a[href*="wa.me"]');

if (phone) {

    phone.addEventListener("dblclick", () => {

        navigator.clipboard.writeText(phone.textContent.trim());

        alert("Telefone copiado.");

    });

}
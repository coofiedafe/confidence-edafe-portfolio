// =========================
// PORTFOLIO JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Add a subtle effect when navigating to sections
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

});

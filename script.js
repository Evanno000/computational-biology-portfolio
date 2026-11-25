
document.addEventListener("DOMContentLoaded", () => {

    // Automatically update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Respect the visitor's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const scrollBehavior = prefersReducedMotion
        ? "auto"
        : "smooth";

    // Smooth navigation for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            // Handle links pointing to the top of the page
            if (targetId === "#") {
                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: scrollBehavior
                });

                return;
            }

            // Find the destination section
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: scrollBehavior,
                    block: "start"
                });
            }

        });

    });

});

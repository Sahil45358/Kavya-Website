document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("learnBtn");
    const aboutSection = document.getElementById("about");

    button.addEventListener("click", () => {
        aboutSection.scrollIntoView({
            behavior: "smooth"
        });
    });

});

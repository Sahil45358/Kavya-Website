document.getElementById("learnBtn").addEventListener("click", () => {

document.getElementById("about").scrollIntoView({
    behavior: "smooth"
});

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section => {

    const top =
    section.getBoundingClientRect().top;

    const visible =
    window.innerHeight - 100;

    if(top < visible){
        section.classList.add("active");
    }

});

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();

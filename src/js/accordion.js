const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        let button = this.children[0];
        let panel = this.nextElementSibling;
        let svg = this.children[0].childNodes[3];

        if (panel.style.display === "block") {
            panel.style.display = "none";
            svg.classList.remove("rotate-180");

        } else {
            panel.style.display = "block";
            svg.classList.add("rotate-180");
        }
    });
}
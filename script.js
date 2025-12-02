const btn = document.getElementById("btn");
const color = ["blue", "white", "red", "orange", "yellow", "pink", "green"];
const body = document.querySelector("body");
let backColor;
let i = 0;
btn.addEventListener("click", () => {
    if (i < 6) {
        i++;
    }
    else {
        i = 0;
    }
    backColor = color[i];
    body.style.backgroundColor = backColor;
})
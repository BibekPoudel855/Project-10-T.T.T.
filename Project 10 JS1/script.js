let body=document.querySelector("body");

// Dark/Light Mode
function darkLightMode() {
    let modeButton=document.querySelector(".mode-button");
    let allModeButtons=document.querySelectorAll(".all-mode-button");
    let currentMode="light";
modeButton.addEventListener("click",()=>{
    if (currentMode==="light") {
        body.classList.add("dark");
        body.classList.remove("light");

        for (const classes of allModeButtons) {
            classes.classList.add("light-button");
            classes.classList.remove("dark-button");
        }
        modeButton.innerHTML="Light Mode";
        currentMode="dark";
    } else {
        body.classList.add("light");
        body.classList.remove("dark");

        for (const classes of allModeButtons) {
            classes.classList.add("dark-button");
            classes.classList.remove("light-button");
        }
        modeButton.innerHTML="Dark Mode";
        currentMode="light";
    }
});
}
darkLightMode();
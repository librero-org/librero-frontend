let totalTime = 5;
const countdownitem = document.getElementById("countdown");
const screensizeitem = document.getElementById("screensize");
window.onload = updateClock;

function updateClock() {
    countdownitem.innerHTML = "Se refrescara en: " + totalTime;
    if (totalTime == 0) {
    } else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}
function refresh() {
    window.location.reload();
}
setInterval("refresh()",5000);

/* Resolución de pantalla */
function updateScreenSizeItem() {
    screensizeitem.innerHTML = "Resolución: " + window.innerWidth + "px x " + window.innerHeight + "px";
}

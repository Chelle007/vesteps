function getLevel() {
    console.log("level: ", localStorage.getItem("level"));
    document.getElementById("levelValue").innerHTML = localStorage.getItem("level");
}

function getSteps() {
    console.log("steps: ", localStorage.getItem("steps"));
    document.getElementById("stepsValue").innerHTML = localStorage.getItem("steps");
}

window.onload = (function () {
    getLevel();
    getSteps();
});
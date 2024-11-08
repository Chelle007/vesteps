let currentIndex = 0;
let currentSkin = "none";
let characters = [];
const characterSlider = document.querySelector('.character-slider');

function setup() {
    characters = JSON.parse(localStorage.getItem("characters"));
    if (characters === null) {
        characters = ['amongus'];
    }
    console.log(characters);

    document.getElementById("characterName").textContent = characters[currentIndex];
    document.getElementById("characterImage").src = "assets/character-" + characters[currentIndex] + "-" + currentSkin + ".png";
}

function updateCharacterDisplay() {
    document.getElementById("characterName").textContent = characters[currentIndex];
    document.getElementById("characterImage").src = "assets/character-" + characters[currentIndex] + "-" + currentSkin + ".png";
}

function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacterDisplay();
}

function prevCharacter() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacterDisplay();
}

function changeSkin(skin) {
    currentSkin = skin;
    document.getElementById("characterImage").src = "assets/character-" + characters[currentIndex] + "-" + currentSkin + ".png";
}

function saveCharacterAndSkin() {
    localStorage.setItem("characterAndSkin", characters[currentIndex] + "-" + currentSkin);
}

setup()
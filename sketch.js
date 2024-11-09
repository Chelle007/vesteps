// Global variables for gacha
// let timer = 0;
// let gachaPicArray = [];
// // rigged gacha
// let gachaImg;
// let gachaCounter = 0;
let timer;
let toggle = true;
let gachaPicArray = [];
let img;
let openGacha = true;

function preload() {
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
    arrowImg = loadImage("assets/arrow.png");
    for (let i = 0; i <= 1; i++) {
        gachaPicArray[i] = loadImage("assets/gacha/" + i + ".png");
    }
    bgImg1 = loadImage("assets/level1-bg.png");

    let characterImagePath = "assets/character-" + localStorage.getItem("characterAndSkin") + ".png"

    if (characterImagePath) {
        character = loadImage(characterImagePath);
    } else {
        character = loadImage("assets/character-amongus-none.png");
    }
}

function setup() {
    navHeight = 160;
    canvas = createCanvas(windowWidth, windowHeight - navHeight);
    canvas.position(0, navHeight);
    textFont('Roboto Mono');

    // To determine which level is the user in
    inLevel = 2;
    tutorialStep = 1;

    angleMode(DEGREES);

    // Make every image centered
    imageMode(CENTER);

    initialSetup();
}

function initialSetup() {
    if (inLevel == 1) {
        lvl1Setup();
    }
    else if (inLevel == 2) {
        lvl2Setup();
    }

    // Gacha setup
    timer = 0;
    img = random(gachaPicArray);
}

function draw() {
    background(0);
    image(bgImg1, width / 2, height / 2, width, height);

    ////////////////Stanley style guide lines////////////////////////
    // // draw guiding lines
    // for (let i = 0; i < 11; i++) {
    //     stroke(255, 0, 0);
    //     line((width / 10) * i, 0, (width / 10) * i, height);
    // };
    // //draw horizontal guiding lines
    // for (let i = 0; i < 11; i++) {
    //     stroke(255, 0, 0);
    //     line(0, (height / 10) * i, width, (height / 10) * i);
    // };

    ////////////////Desmond style guide lines////////////////////////
    //draw guiding lines
    // for (let i = 0; i < 6; i++) {
    //     stroke(255, 0, 0);
    //     line((width / 5) * i, 0, (width / 5) * i, height);
    // };
    // //draw horizontal guiding lines
    // for (let i = 0; i < 11; i++) {
    //     stroke(255, 0, 0);
    //     line(0, (height / 5) * i, width, (height / 5) * i);
    // };
    /////////////////////////////////////////////////////////////////

    if (inLevel == 1) {
        // Level 1 code
        lvl1Draw();
    }
    else if (inLevel == 2) {
        // Level 2 code
        lvl2Draw();
    }



    // Check if the game character is near the key
    checkGameCharNearKey();
    // Check if the game character is near the treasure
    checkGameCharNearTreasure();

}

function checkGameCharNearKey() {
    let gameCharIsNearKey = dist(gameChar.x, gameChar.y, key.x, key.y) <= 50;
    if (gameCharIsNearKey && !key.isFound) {
        key.isFound = true;
        console.log("Key found!");
    } else if (!key.isFound) {
        // Draw collectable key if not found
        // Apply rotation along the Y-axis to make it spin
        drawKey(key.x, key.y);
    }
}

function checkGameCharNearTreasure() {
    let gameCharIsNearTreasure = dist(gameChar.x, gameChar.y, treasure.x, treasure.y) <= 20;
    if (key.isFound && gameCharIsNearTreasure && !treasure.isFound) {
        treasure.isFound = true;
        console.log("Treasure Opened! maybe direct to gacha page");
    }
}

// Detect tap or click
function touchStarted() {
    let touchX;
    let touchY;
    if (touches.length > 0) {
        touchX = touches[0].x;
        touchY = touches[0].y;
    }
    // Calculate the distance from the tap/click to the node center
    if (inLevel == 1) {
        for (let i = 0; i < lvl1Nodes.length; i++) {
            let nodeStatus = lvl1Nodes[i].isActive();
            if (nodeStatus) {
                let clickNode = dist(touchX, touchY, lvl1Nodes[i].x, lvl1Nodes[i].y)
                if (clickNode <= 80) {
                    // move the game char to the clicked node
                    console.log("Ellipse clicked!");
                    countSteps(10);
                    gameChar.x = lvl1Nodes[i].x;
                    gameChar.y = lvl1Nodes[i].y;
                }
            }
        }
    }
    else if (inLevel == 2) {
        for (let i = 0; i < lvl2Nodes.length; i++) {
            let nodeStatus = lvl2Nodes[i].isActive();
            if (nodeStatus) {
                let clickNode = dist(touchX, touchY, lvl2Nodes[i].x, lvl2Nodes[i].y)
                if (clickNode <= 80) {
                    // move the game char to the clicked node
                    console.log("Ellipse clicked!");
                    countSteps(20);
                    gameChar.x = lvl2Nodes[i].x;
                    gameChar.y = lvl2Nodes[i].y;
                }
            }
        }
    }

    // Go next tutorial steps
    tutorialStep++;

    // when user is in the gacha pop up, and tap the screen, it will go back to map
    if (treasure.isFound && openGacha) {
        // remove the gacha popup
        openGacha = false;
        console.log("close gacha pop up", openGacha);
        rectMode(CORNER);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}


// storage related functions

function countSteps(stepsNeeded) {
    let stepsTaken = Number(localStorage.getItem("stepsTaken"));
    let availableSteps = Number(localStorage.getItem("steps"));

    if (stepsNeeded > availableSteps) {
        return false;
    }

    localStorage.setItem("stepsTaken", stepsTaken + Number(stepsNeeded));
    document.getElementById('stepsValue').textContent = Number(localStorage.getItem('steps')) - Number(localStorage.getItem('stepsTaken'));
    return true;
}

function claimChest1(accessorry) {
    localStorage.setItem("skins", JSON.stringify(['none', 'bowtie', accessorry]));
}

function claimChest2() {
    localStorage.setItem("characters", JSON.stringify(['amongus', 'zombie amongus']));
}
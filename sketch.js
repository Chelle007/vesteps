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
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight - navHeight);
    canvas.position(0, 160);
    textFont('Roboto Mono');

    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }

    // To determine which level is the user in
    inLevel = 1;
    tutorialStep = 1;

    angleMode(DEGREES);

    // Make every image centered
    imageMode(CENTER);
    nodes = [];
    // start node
    nodes.push(new createNode(width / 10 * 1, height / 10 * 5));

    // 2 going right nodes
    nodes.push(new createNode(width / 10 * 3, height / 10 * 9));
    nodes.push(new createNode(width / 10 * 5, height / 10 * 9));

    // 3 going up nodes
    nodes.push(new createNode(width / 10 * 7, height / 10 * 5));
    nodes.push(new createNode(width / 10 * 7, height / 10 * 7));
    nodes.push(new createNode(width / 10 * 7, height / 10 * 9));

    // 2 going left nodes (go to chest)
    nodes.push(new createNode(width / 10 * 5, height / 10 * 5));
    nodes.push(new createNode(width / 10 * 3, height / 10 * 5));
    nodes.push(new createNode(width / 10 * 1, height / 10 * 5));

    // 2 going up nodes
    nodes.push(new createNode(width / 10 * 5, height / 10 * 3));
    nodes.push(new createNode(width / 10 * 5, height / 10 * 1));

    // 2 going left nodes (to portal)
    nodes.push(new createNode(width / 10 * 7, height / 10 * 1));
    nodes.push(new createNode(width / 10 * 9, height / 10 * 1));
    console.log(nodes);

    gameChar = {
        x: width / 10 * 1,
        y: height / 10 * 9,
        color: "#CC0000"
    }

    key = {
        x: width / 10 * 3,
        y: height / 10 * 5,
        isFound: false
    }

    treasure = {
        x: width / 10 * 1,
        y: height / 10 * 5,
        isFound: false
    }

    // Gacha setup
    timer = 0;
    img = random(gachaPicArray);
}

function draw() {
    background(200, 200, 200);

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
    for (let i = 0; i < 6; i++) {
        stroke(255, 0, 0);
        line((width / 5) * i, 0, (width / 5) * i, height);
    };
    //draw horizontal guiding lines
    for (let i = 0; i < 11; i++) {
        stroke(255, 0, 0);
        line(0, (height / 5) * i, width, (height / 5) * i);
    };
    /////////////////////////////////////////////////////////////////

    // Level 1 code
    drawNodes();

    // Draw portal on top left corner (ending point)
    drawPortal(width / 10 * 9, height / 10 * 1);

    // Draw game character on bottom left (starting point)
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Check if the game character is near the key
    let gameCharIsNearKey = dist(gameChar.x, gameChar.y, key.x, key.y) <= 50;
    if (gameCharIsNearKey && !key.isFound) {
        key.isFound = true;
        console.log("Key found!");
    } else if (!key.isFound) {
        // Draw collectable key if not found
        // Apply rotation along the Y-axis to make it spin
        drawKey(key.x, key.y);
    }

    // Check if the game character is near the treasure
    let gameCharIsNearTreasure = dist(gameChar.x, gameChar.y, treasure.x, treasure.y) <= 20;
    if (key.isFound && gameCharIsNearTreasure && !treasure.isFound) {
        treasure.isFound = true;
        console.log("Treasure Opened! maybe direct to gacha page");
    }
    // Draw treasure
    drawTreasure(treasure.x, treasure.y, treasure.isFound);

    // Draw tutorial text
    drawTutorial();
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
    for (let i = 0; i < nodes.length; i++) {
        let nodeStatus = nodes[i].isActive();
        if (nodeStatus) {
            if (dist(touchX, touchY, nodes[i].x, nodes[i].y) <= 80) {
                // move the game char to the clicked node
                console.log("Ellipse clicked!");
                gameChar.x = nodes[i].x;
                gameChar.y = nodes[i].y;
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
function preload() {
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
    arrowImg = loadImage("assets/arrow.png");
}

function setup() {
    navHeight = 160;
    canvas = createCanvas(windowWidth, windowHeight - navHeight);
    canvas.position(0, navHeight);
    textFont('Roboto Mono');

    // To determine which level is the user in
    inLevel = 1;
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
}

function draw() {
    background(200);

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
                    gameChar.x = lvl1Nodes[i].x;
                    gameChar.y = lvl1Nodes[i].y;
                }
            }
        }
    }
    // else if (inLevel == 2){

    // }

    // Go next tutorial steps
    tutorialStep++;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}
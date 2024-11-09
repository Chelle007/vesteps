function preload() {
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
    arrowImg = loadImage("assets/arrow.png");
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
    let canvas = createCanvas(windowWidth, windowHeight - navHeight);
    canvas.position(0, navHeight);

    // let gameChar_x = width / 2;
    // let gameChar_y = (height / 10) * 7;
    // createCanvas(windowWidth, windowHeight - navHeight);
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
                countSteps(10);
                gameChar.x = nodes[i].x;
                gameChar.y = nodes[i].y;
            }
        }
    }

    // Go next tutorial steps
    tutorialStep++;
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
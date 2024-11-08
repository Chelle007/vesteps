function preload(){
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight - navHeight);
    textFont('Roboto Mono');

    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }
    
    // To determine which level is the user in
    inLevel = 1;

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
    background(200,200,200);

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

    // Tutorial text
    // Step 1: Darken the whole canvas
    fill(0, 0, 0, 90); // Semi-transparent black for darkening
    rect(0, 0, width, height);

    // Step 2: Lighten a specific area
    blendMode(REMOVE);
    fill(255);

    // 1. Gain stamina by walking IRL!
    // 2. With enough stamina, you can move
    // 3. Find the key and unlock treasure
    // 4. Go next level via portal
    
    // let tutorialStep = 1;
    
    // if (tutorialStep == 1) {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    rect(width / 2, height / 10 * 1, 900, 100); // Position and size of the lightened area
    
    // Reset blend mode to normal
    blendMode(BLEND);
    fill(240, 0, 0);
    textSize(46);
    text('1. Gain stamina by walking IRL!', width / 2, height / 10 * 1);
    // text('2. With enough stamina, you can move', 150, 175);
    // text('3. Find the key and unlock treasure', 150, 200);
    // text('4. Go next level via portal', 150, 225);
    
    // Change back to default CORNER mode
    rectMode(CORNER);
}

// Detect tap or click
function mousePressed() {
    // Calculate the distance from the tap/click to the node center
    for (let i = 0; i < nodes.length; i++) {
        let nodeStatus = nodes[i].isActive();
        if (nodeStatus) {
            if (dist(mouseX, mouseY, nodes[i].x, nodes[i].y) <= 80) {
                // move the game char to the clicked node
                console.log ("Ellipse clicked!");
                gameChar.x = nodes[i].x;
                gameChar.y = nodes[i].y;
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}
function preload(){
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
}

var gameChar;

// Get the nav height after it is loaded


function setup() {
    createCanvas(windowWidth, windowHeight - navHeight);

    // let gameChar_x = width / 2;
    // let gameChar_y = (height / 10) * 7;

    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }
    
    // To determine which level is the user in
    inLevel = 1;

    angleMode(DEGREES);
    // TODO: change this later according to

    // TODO: change this later according to the state of the game functions
    keyIsFound = false;


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

    // Draw game character on bottom left (starting point)
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Check if the game character is near the key
    gameCharIsNearKey = dist(gameChar.x, gameChar.y, key.x, key.y) <= 50;
    if (gameCharIsNearKey) {
        key.isFound = true;
        console.log("Key found!");
    } else if (!key.isFound) {
        // Draw collectable key if not found
        drawKey(key.x, key.y)
    }


    // Draw treasure (just for preview only)
    drawTreasure(width / 10 * 1, height / 10 * 5, key.isFound);

    // Draw portal on top left corner (ending point)
    drawPortal(width / 10 * 9, height / 10 * 1);
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
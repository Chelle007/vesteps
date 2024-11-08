function preload() {
    treasureOpenImg = loadImage("assets/treasure_open.png");
    treasureCloseImg = loadImage("assets/treasure_close.png");
    portalImg = loadImage("assets/portal.png");
}

var gameChar;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 160);

    let gameChar_x = width / 2;
    let gameChar_y = (height / 10) * 7;

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
    nodes.push(new createNode(width / 2, (height / 5) * 3));
    nodes.push(new createNode(width / 2, (height / 5) * 2));
    nodes.push(new createNode(width / 6, (height / 5) * 2));
    nodes.push(new createNode(width / 6, height / 5));
    nodes.push(new createNode((width / 6) * 5, (height / 5) * 2));
    nodes.push(new createNode((width / 6) * 7, (height / 5) * 2));
}

function draw() {
    background(200, 200, 200);
    //draw guiding lines
    for (let i = 0; i < 7; i++) {
        stroke(255, 0, 0);
        line((width / 6) * i, 0, (width / 6) * i, height);
    };

    for (let i = 0; i < 11; i++) {
        stroke(255, 0, 0);
        line(0, (height / 10) * i, width, (height / 10) * i)
    };

    drawNodes();

    // Draw among us
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Draw collectable (key)
    drawKey(width / 6 * 5, height / 10 * 3, keyIsFound);

    // Draw treasure (just for preview only)
    drawTreasure(width / 6 * 5, height / 10 * 3, keyIsFound);

    // Draw treasure according to figma (outside canvas)
    drawTreasure(width / 6 * 7, height / 10 * 3, keyIsFound);

    drawPortal(width / 6 * 1, height / 10 * 1);
    drawKey((width / 6) * 5, (height / 5) * 2, keyIsFound);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}
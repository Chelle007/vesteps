var gameChar;

function setup() {
    createCanvas(windowWidth, windowHeight);

    let gameChar_x = width / 2;
    let gameChar_y = (height / 10) * 7;

    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }

    angleMode(DEGREES);
    // TODO: change this later according to

    keyIsFound = false;

    nodes = [];
    nodes.push(new createNode(width / 2, (height / 5) * 3));
    nodes.push(new createNode(width / 2, (height / 5) * 2));
    nodes.push(new createNode(width / 6, (height / 5) * 2));
    nodes.push(new createNode(width / 6, height / 5));
    nodes.push(new createNode((width / 6) * 5, (height / 5) * 2));
    nodes.push(new createNode((width / 6) * 7, (height / 5) * 2));


}

function draw() {
    background(200);
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
    drawKey((width / 6) * 5, (height / 5) * 2, keyIsFound);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}
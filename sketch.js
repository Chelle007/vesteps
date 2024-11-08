function setup() {
    createCanvas(windowWidth, windowHeight);
    gameChar = {
        x: width / 2,
        y: height / 10 * 7,
        color: "#CC0000"
    }

    angleMode(DEGREES);
    // TODO: change this later according to

    keyIsFound = false;
}

function draw() {
    background(200, 200, 200);
    //draw guiding lines
    for (let i = 0; i < 7; i++) {
        stroke(255, 0, 0, 100);
        line((width / 6) * i, 0, (width / 6) * i, height);
    };

    for (let i = 0; i < 11; i++) {
        stroke(255, 0, 0);
        line(0, (height / 10) * i, width, (height / 10) * i)
    };

    var node1 = new Node(width / 2, (height / 5) * 3);
    var node2 = new Node(width / 2, (height / 5) * 2);
    var node3 = new Node(width / 6, (height / 5) * 2);
    var node4 = new Node(width / 6, height / 5);
    var node5 = new Node((width / 6) * 5, (height / 5) * 2);
    var node6 = new Node((width / 6) * 7, (height / 5) * 2);

    node1.draw();
    node2.draw();
    node3.draw();
    node4.draw();
    node5.draw();
    node6.draw();

    // Draw among us
    amongus(gameChar.x, gameChar.y, gameChar.color);

    // Draw collectable (key)
    drawKey(width / 2, height / 2, keyIsFound);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // Adjusts the canvas size when the window is resized
}
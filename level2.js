function lvl2Setup() {
    // initialise the array for nodes in level 2
    lvl2Nodes = [];

    // Nodes in the bottom row
    lvl2Nodes.push(new Node(width / 10 * 3, height / 10 * 9));
    lvl2Nodes.push(new Node(width / 2, height / 10 * 9));
    lvl2Nodes.push(new Node(width / 10 * 7, height / 10 * 9));
    lvl2Nodes.push(new Node(width / 10 * 9, height / 10 * 9));

    // Nodes in the second row from the bottom
    lvl2Nodes.push(new Node(width / 2, height / 10 * 7));
    lvl2Nodes.push(new Node(width / 10 * 9, height / 10 * 7));

    // Nodes in the middle row
    lvl2Nodes.push(new Node(width / 10, height / 2));
    lvl2Nodes.push(new Node(width / 10 * 3, height / 2));
    lvl2Nodes.push(new Node(width / 2, height / 2));
    lvl2Nodes.push(new Node(width / 10 * 7, height / 2));
    lvl2Nodes.push(new Node(width / 10 * 9, height / 2));

    // Nodes in the second row from the top
    lvl2Nodes.push(new Node(width / 10, height / 10 * 3));
    lvl2Nodes.push(new Node(width / 10 * 7, height / 10 * 3));

    // Nodes in top row
    lvl2Nodes.push(new Node(width / 10, height / 10));
    lvl2Nodes.push(new Node(width / 10 * 7, height / 10));
    lvl2Nodes.push(new Node(width / 10 * 9, height / 10));

    console.log(lvl2Nodes);

    gameChar = {
        x: width / 10,
        y: height / 10 * 9,
        color: "#CC0000"
    }

    key = {
        x: width / 10 * 9,
        y: height / 10 * 7,
        isFound: false
    }

    treasure = {
        x: width / 10,
        y: height / 10,
        isFound: false
    }
}

// end screen flag
let endScreen = false;

function lvl2Draw() {
    background(0);

    // When user reached the end of level 2, display end screen
    if (endScreen) {
        // Remove key whether found or not
        key.isFound = true;
        drawEndScreen();
        return
    }

    image(bgImg2, width / 2, height / 2, width, height);

    // Draw nodes in level 1
    for (let i = 0; i < lvl2Nodes.length; i++) {
        lvl2Nodes[i].draw()
    }

    // Draw portal on top left corner (ending point)
    drawPortal(width / 10 * 9, height / 10 * 1);
    // Draw game character
    amongus(gameChar.x, gameChar.y, gameChar.color);
    // Draw treasure
    drawTreasure(treasure.x, treasure.y, treasure.isFound);
}
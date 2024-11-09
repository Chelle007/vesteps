function lvl1Setup() {
    lvl1Nodes = [];
    // start node
    lvl1Nodes.push(new createNode(width / 10, height / 2));

    // 2 going right nodes
    lvl1Nodes.push(new createNode(width / 10 * 3, height / 10 * 9));
    lvl1Nodes.push(new createNode(width / 2, height / 10 * 9));

    // 3 going up nodes
    lvl1Nodes.push(new createNode(width / 10 * 7, height / 2));
    lvl1Nodes.push(new createNode(width / 10 * 7, height / 10 * 7));
    lvl1Nodes.push(new createNode(width / 10 * 7, height / 10 * 9));

    // 2 going left nodes (go to chest)
    lvl1Nodes.push(new createNode(width / 2, height / 2));
    lvl1Nodes.push(new createNode(width / 10 * 3, height / 2));
    lvl1Nodes.push(new createNode(width / 10, height / 2));

    // 2 going up nodes
    lvl1Nodes.push(new createNode(width / 2, height / 10 * 3));
    lvl1Nodes.push(new createNode(width / 2, height / 10));

    // 2 going left nodes (to portal)
    lvl1Nodes.push(new createNode(width / 10 * 7, height / 10));
    lvl1Nodes.push(new createNode(width / 10 * 9, height / 10));
    console.log(lvl1Nodes);

    gameChar = {
        x: width / 10,
        y: height / 10 * 9,
        color: "#CC0000"
    }

    key = {
        x: width / 10 * 3,
        y: height / 2,
        isFound: false
    }

    treasure = {
        x: width / 10,
        y: height / 2,
        isFound: false
    }
}

function lvl1Draw() {
    // Draw nodes in level 1
    for (let i = 0; i < lvl1Nodes.length; i++) {
        lvl1Nodes[i].draw()
    }

    // Draw portal on top left corner (ending point)
    drawPortal(width / 10 * 9, height / 10 * 1);
    // Draw game character
    amongus(gameChar.x, gameChar.y, gameChar.color);
    // Draw treasure
    drawTreasure(treasure.x, treasure.y, treasure.isFound);
    // Draw tutorial text
    drawTutorial();
}
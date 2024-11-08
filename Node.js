var nodes;

function createNode(x, y) {
    var node = {
        x: x,
        y: y,
        draw: function () {
            fill(180);
            stroke(0);
            strokeWeight(1);
            ellipse(x, y, 60);
            noFill();
        }
    };
    return node;
}

function drawNodes() {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].draw();
    }
}
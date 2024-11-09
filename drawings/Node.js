var nodes;

function createNode(x, y) {
    var node = {
        x: x,
        y: y,
        isActive: function () {
            if (dist(node.x, node.y, gameChar.x, gameChar.y) < width / 5 * 1.6) {
                return true;
            } else {
                return false;
            }
        },
        draw: function () {
            // Update nodes color based on if they are active or not
            if (this.isActive()) {
                stroke(120, 167, 125);
                fill(224, 244, 224);
            } else {
                fill(244, 244, 244);
                stroke(179, 167, 145);
            }
            strokeWeight(18);
            ellipse(x, y, width / 5 * 0.6);
            
            // Reset styling
            noFill();
            strokeWeight(1);
            noStroke();
        }
    };
    return node;
}

function drawNodes() {
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].draw();
    }
}
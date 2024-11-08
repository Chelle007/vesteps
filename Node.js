function Node(node_x, node_y) {
    var x = node_x;
    var y = node_y;

    this.draw = function () {
        //Draws the node
        fill(180);
        stroke(0);
        strokeWeight(1);
        ellipse(x, y, 60);
        noFill();
    }
}
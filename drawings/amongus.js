function amongus(gameChar_x, gameChar_y, color) {
    var x = gameChar_x / 3;
    var y = gameChar_y / 3;

    push();
    scale(3);
    strokeWeight(1.5);
    stroke(0);
    translate(x, y + 10);
    fill(color);

    // left leg
    push();
    translate(-8, -10);
    angleMode(DEGREES);
    rotate(35);
    rect(0, 0, 9, 10, 3, 0, 3, 3);
    pop();

    // right leg
    push();
    translate(3, -5);
    angleMode(DEGREES);
    rotate(-35);
    rect(0, 0, 9, 10, 0, 3, 3, 3);
    pop();

    // jetpack without flame
    rect(-20, -40, 10, 30, 50);

    //body
    rect(-13, -50, 30, 45, 10, 15, 5, 5);

    // eye
    fill(134, 203, 223);
    rect(-3, -40, 25, 14, 50);
    pop();
}
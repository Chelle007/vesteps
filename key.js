function drawKey(x, y, state) {
    if (!state) {
        stroke(165, 42, 42);
        strokeWeight(4);

        // key body
        rect(x + 70, y - 10, 20, 40);
        rect(x + 45, y - 10, 15, 30);
        rect(x - 5, y - 10, 100, 20);

        // key handle
        fill(250, 255, 0);
        ellipse(x, y, 50, 50);

        noStroke();
    }
}
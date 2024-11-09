function drawTreasure(x, y, treasureState) {
    // When not found yet
    if (!treasureState) {
        image(treasureCloseImg, x, y - 30, 150, 150);
    } else if (treasureState) {
        image(treasureOpenImg, x, y - 30, 150, 150);
        gachaPopup();
    }
}

function gachaPopup() {
    // Background and main frame
    createCanvas(600, 600);
    colorMode(HSB, 100, 100, 100);
    background(100, 0, 75);

    // Draw frame background
    noStroke();
    rectMode(CENTER);
    fill(100, 0, 100);
    rect(300, 200, 400, 365);

    // Toggle-based animation
    if (toggle) {
        timer++;
        img = random(picArray);
    }

    // Reset the toggle and timer after the duration
    if (timer > 110) {
        timer = 0;
        toggle = false;
    }

    // Display the image
    imageMode(CENTER);
    image(img, 300, 200);

    // Button setup and styling (only initialized once)
    if (!myButton) {
        myButton = createButton('GACHA!');
        myButton.position(225, 420);
        myButton.style('background-color', color(100, 0, 100));
        myButton.style('font-size', '24px');
        myButton.style('text-align', 'center');
        myButton.style('padding', '35px');
        myButton.mousePressed(() => toggle = true); // Activate toggle on button press
    }

}
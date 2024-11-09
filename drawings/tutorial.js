function drawTutorial() {
    if (tutorialStep <= 5) {
        // Step 1: Darken the whole canvas
        fill(0, 0, 0, 90); // Semi-transparent black for darkening
        rect(0, 0, width, height);

        // Step 2: Lighten a specific area
        blendMode(REMOVE);
        rectMode(CENTER);
        textAlign(CENTER, CENTER);

        if (tutorialStep == 1) {
            // tutorial Step 1
            blendMode(BLEND);
            fill(255);
            rect(width / 2, height / 10 * 1, 900, 100); // text bg
            fill(240, 0, 0);
            textSize(46);
            text('1. Gain stamina by walking IRL!', width / 2, height / 10 * 1);
            image(arrowImg, width / 10 * 7.5, height / 10 * 0.4, 100, 100);
        } else if (tutorialStep == 2) {
            // tutorial Step 2
            fill(180,180,180,100);
            rect(width / 5 * 1, height / 10 * 9, width / 5 * 2, height / 5);
            blendMode(BLEND);
            fill(255);
            rect(width / 2, height / 10 * 7, width / 4 * 3.5, 90); // text bg
            fill(240, 0, 0);
            textSize(38);
            text('2. With enough stamina, you can move', width / 2, height / 10 * 7);
        } else if (tutorialStep == 3) {
            // tutorial Step 3
            fill(180,180,180,100);
            rect(width / 5 * 1, height / 10 * 5, width / 5 * 2, height / 5);
            blendMode(BLEND);
            fill(255);
            rect(width / 4 * 1.5, height / 10 * 3.5, width / 4 * 3, 80); // text bg
            fill(240, 0, 0);
            textSize(32);
            text('3. Find the key and unlock treasure', width / 4 * 1.5, height / 10 * 3.5);
        } else if (tutorialStep == 4) {
            // tutorial Step 4
            fill(180,180,180, 200);
            rect(100, height - 100, 300, 300, 30);
            blendMode(BLEND);
            fill(255);
            rect(width / 2, height / 10 * 7.5, width / 4 * 2.8, 80); // text bg
            fill(240, 0, 0);
            textSize(32);
            text('4. Check your rewards in your bag', width / 2, height / 10 * 7.5);
        } else if (tutorialStep == 5) {
            // tutorial Step 5
            fill(180,180,180, 100);
            rect(width / 5 * 4.5, height / 10 * 1, width / 5, height / 5);
            blendMode(BLEND);
            fill(255);
            rect(width / 2, height / 10 * 1, width / 4 * 2.3, 80); // text bg
            fill(240, 0, 0);
            textSize(32);
            text('5. Go next level via portal', width / 2, height / 10 * 1);
        } 
        // Change back to default mode
        rectMode(CORNER);
    }
}
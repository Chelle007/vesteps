function drawTreasure(x, y, treasureState) {
    // When not found yet
    if (!treasureState) {
        image(treasureCloseImg, x, y - 30, 150, 150);
    } else if (treasureState) {
        image(treasureOpenImg, x, y - 30, 150, 150);
        if (openGacha) {
            gachaPopup();
        }
    }
}

function gachaPopup() {
    background(0, 0, 0, 0, 0.2);

    // Draw container
    rectMode(CENTER);
    fill(235, 235, 0, 150);
    strokeWeight(15);
    stroke(100, 0, 100);
    rect(width/2, height/2, width/1.2, width/1.2);
    strokeWeight(1);
    noStroke();
    rectMode(CORNER);

    // Simple toggle-based animation
    if (toggle) {
        if (frameCount % 3 === 0) { // Change image every 3 frames for smooth animation
            img = random(gachaPicArray);
        }
        timer++;
    }
    
    // Stop after about 2 seconds
    if (timer > 40) {
        timer = 0;
        toggle = false;
        
        // Only check the final result when animation stops
        if (michelleCounter == 0) {
            let imgIndex = gachaPicArray.indexOf(img); // Get the index of the final image
            let accessory;
            
            if (imgIndex == 0) {
                accessory = "mustache";
            } else if (imgIndex == 1) {
                accessory = "flower";
            } else if (imgIndex == 2) {
                accessory = "love";
            }
            
            claimChest1(accessory);
            console.log("michelle's func called " + accessory);
            michelleCounter++;
        }
    }

    // Draw current image
    imageMode(CENTER);
    image(img, width/2, height/2);
}
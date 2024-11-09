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
    background(0,0,0,0, 0.2);

    // Draw container
    // noStroke();
    rectMode(CENTER);
    fill(235, 235, 0, 150);
    strokeWeight(15);
    stroke(100, 0, 100);
    rect(width/2, height/2, width/1.2, width/1.2);
    strokeWeight(1);
    noStroke();
    rectMode(CORNER);

    // Draw text
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
    }

    // Draw current image
    imageMode(CENTER);
    image(img, width/2, height/2);
    let imgIndex = gachaPicArray.indexOf(img); // Get the index of the selected image

    let accessorry;

    if (michelleCounter == 0) {
        if (imgIndex == 0) {
            accessorry = "mustache";
        } else if (imgIndex == 2) {
            accessorry = "bowtie";
        }
        claimChest1(accessorry);
        console.log("michelle's func called")
        michelleCounter++;
    }
}

function changeToggle () {
    toggle = true;
}
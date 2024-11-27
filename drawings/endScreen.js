let yOffset = 700; // Starting vertical position for end screen
function drawEndScreen() {
    background(255);
    textAlign(CENTER);
    fill(0);

    let lineHeight = 60; // Space between lines
    let startY = yOffset; // Start position of the text

    textSize(56);
    text("You have reached the end!", width / 2, startY);
    text("Be proud of yourself, YAY🎉", width / 2, startY + lineHeight * 2);

    textSize(48);
    text("This project was the result of:", width / 2, startY + lineHeight * (1+4));
    textSize(36);
    text("👨🏻⭐️Hackathon 2024: CODE, PLAY and CONQUER🎮", width / 2, startY + lineHeight * (1+5));
    text("by UOL CSSC", width / 2, startY + lineHeight * (1+6));
    textSize(42);
    text("🥈2nd Place Winner", width / 2, startY + lineHeight * (1+7));

    textSize(48);
    text("👟VeSteps Developers:👨🏻‍💻", width / 2, startY + lineHeight * (2+9));
    text("Michelle Chan", width / 2, startY + lineHeight * (2+10));
    text("Stanley Laurenz", width / 2, startY + lineHeight * (2+11));
    text("Jayadipa Fukutaro Sie", width / 2, startY + lineHeight * (2+12));
    text("Daniella Setio", width / 2, startY + lineHeight * (2+13));
    text("Desmond", width / 2, startY + lineHeight * (2+14));

    // Move the text upwards
    yOffset -= 1; // Adjust speed as needed
    
    // Reset yOffset to loop the text
    if (startY + lineHeight * 16 < 0) {
        yOffset = height;
    }    
}
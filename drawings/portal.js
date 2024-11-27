function drawPortal(x, y) {
    image(portalImg, x, y - 65, 150, 150);

    let gameCharIsAtPortal = dist(gameChar.x, gameChar.y, x, y) <= 50;
    
    // Check if the game character is at the portal
    if (gameCharIsAtPortal) {
        let currentLevel = parseInt(localStorage.getItem('level'));

        if (currentLevel === 1) {
            // Move to level 2
            localStorage.setItem('level', 2);
            window.location.reload();
        } else if (currentLevel === 2) {
            // End the game
            endScreen = true;
            console.log("endScreen start: ", endScreen);
        }
    }
}

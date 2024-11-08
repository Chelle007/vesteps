function drawTreasure(x, y, keyState) {
    let gameCharIsNearTreasure = dist(gameChar.x, gameChar.y, x, y) <= 50;
    
    if (gameCharIsNearTreasure && keyState) {
        image(treasureOpenImg, x, y - 30, 150, 150);
    } else {
        image(treasureCloseImg, x, y - 30, 150, 150);
    }
}
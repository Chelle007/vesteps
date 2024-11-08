function drawTreasure(x, y, treasureState) {
    // When not found yet
    if (!treasureState) {
        image(treasureCloseImg, x, y - 30, 150, 150);
    } else if (treasureState) {
        image(treasureOpenImg, x, y - 30, 150, 150);
    }
}
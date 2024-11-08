function drawPortal (x, y) {
    image(portalImg, x, y - 65, 150, 150);

    let gameCharIsAtPortal = dist(gameChar.x, gameChar.y, x, y) <= 50;
    if (gameCharIsAtPortal && inLevel == 1) {
        inLevel++
    }
}
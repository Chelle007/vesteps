var nodes;

// Standard function syntax
// function createNode(x, y) {
//     var node = {
//         x: x,
//         y: y,
//         isActive: function () {
//             return dist(this.x, this.y, gameChar.x, gameChar.y) < width / 5 * 1.6;
//         },
//         draw: function () {
//             // Update nodes color based on if they are active or not
//             if (this.isActive()) {
//                 stroke(120, 167, 125);
//                 fill(224, 244, 224);
//             } else {
//                 fill(244, 244, 244);
//                 stroke(179, 167, 145);
//             }
//             strokeWeight(18);
//             ellipse(x, y, width / 5 * 0.6);

//             // Reset styling
//             noFill();
//             strokeWeight(1);
//             noStroke();
//         }
//     };
//     return node;
// }

// Class syntax
class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isActive() {
        fill(255,0,0,0);
        // vertical rectangle
        rect(this.x - (width / 5 * 0.4 / 2), this.y - (height / 5 * 1.6 / 2), width / 5 *0.4, height / 5 * 1.6);
        rect(gameChar.x - (width / 5 * 0.7/2), gameChar.y - (height / 5 * 1.6 / 2), width / 5 * 0.7, height / 5 * 1.6);
        
        // horizontal rectangle
        rect(this.x - (width / 5 * 1.6 / 2), this.y - (height / 5 * 0.4 / 2), width / 5 * 1.6, height / 5 * 0.4);
        rect(gameChar.x - (width / 5 * 1.6 / 2), gameChar.y - (height / 5 * 0.5 / 2), width / 5 * 1.6, height / 5 * 0.5);

        // Collision detection library from https://github.com/bmoren/p5.collide2D?tab=readme-ov-file#colliderectrect
        // Params collideRectRect(x, y, width, height, x2, y2, width2, height2 )
        hitTopDown = collideRectRect(gameChar.x - (width / 5 * 0.7/2), gameChar.y - (height / 5 * 1.6 / 2), width / 5 * 0.7, height / 5 * 1.6, this.x - (width / 5 * 0.4 / 2), this.y - (height / 5 * 1.6 / 2), width / 5 *0.4, height / 5 * 1.6);
        hitRightLeft = collideRectRect(gameChar.x - (width / 5 * 1.6 / 2), gameChar.y - (height / 5 * 0.5 / 2), width / 5 * 1.6, height / 5 * 0.5, this.x - (width / 5 * 1.6 / 2), this.y - (height / 5 * 0.4 / 2), width / 5 * 1.6, height / 5 * 0.4);
        
        // If either hitTopDown or hitRightLeft is true, return true
        return hitTopDown || hitRightLeft;
    }

    draw() {
        if (this.isActive()) {
            stroke(120, 167, 125);
            fill(224, 244, 224);
        } else {
            fill(244, 244, 244);
            stroke(179, 167, 145);
        }
        strokeWeight(18);
        ellipse(this.x, this.y, width / 5 * 0.6);

        // Reset styling
        noFill();
        strokeWeight(1);
        noStroke();
    }
}
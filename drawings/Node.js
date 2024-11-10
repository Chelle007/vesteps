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
        return dist(this.x, this.y, gameChar.x, gameChar.y) < width / 5 * 1.6;
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
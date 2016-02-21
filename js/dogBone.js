var iElapsed = 0, eCanvas, oCtx, oDog, oBone, iScore = 0,
    iStart, iGameTimer, oDogImage, oBoneImage, oGardenImage;
//alert(oCtx);

function endGame() {
    'use strict';

    clearInterval(iStart);
    clearInterval(iGameTimer);

    oCtx.fillStyle = '#FFFFFF';
    oCtx.fillRect(0, 0, eCanvas.width, eCanvas.height);

    oCtx.fillStyle = '#0000FF';

    oCtx.font = "50px Georgia";
    oCtx.fillText("Score - " + iScore, 10, 150);

    oCtx.font = "50px Georgia";
    oCtx.fillText("Time - " + parseInt(iElapsed / 60, 10)
        + ":" + iElapsed % 60, 10, 250);
}

function countTimer() {
    'use strict';

    iElapsed += 1;
    if (iElapsed === 180) {
        endGame();
    }
}
function randomBone() {
    'use strict';
    var iRandomX, iRandomY;

    iRandomX = (Math.random() * 1000) % 450;
    iRandomY = (Math.random() * 1000) % 450;

    oBone.x = iRandomX;
    oBone.y = iRandomY;
}
function resetDog() {
    'use strict';
    var iCenterX, iCenterY;

    iCenterX = 225;
    iCenterY = 225;

    oDog.x = iCenterX;
    oDog.y = iCenterY;
}
function resetGame() {
    'use strict';

    randomBone();
    resetDog();

    //redraw();
}

function intersect(rect1, rect2) {
    'use strict';

    var x = false,
        y = false;

    if (rect1.x > rect2.x &&
            rect1.x < rect2.x + rect2.w) {
        x = true;
    } else if (rect2.x > rect1.x &&
            rect2.x < rect1.x + rect1.w) {
        x = true;
    }

    if (rect1.y > rect2.y &&
            rect1.y < rect2.y + rect2.h) {
        y = true;

    } else if (rect2.y > rect1.y &&
            rect2.y < rect1.y + rect1.h) {
        y = true;

    }

    if (x && y) {
        //console.log(x);
        //console.log(y);
        return true;
    }
    return false;
}

function drawScene() {
    'use strict';

    if (intersect(oDog, oBone)) {
        iScore += 1;
        resetGame();
    }
    //console.log('draw scene');
    oCtx.fillStyle = '#FFFFFF';
    oCtx.fillRect(0, 0, eCanvas.width, eCanvas.height);

    oCtx.drawImage(oGardenImage, 0, 0, eCanvas.width, eCanvas.height);

    /*oCtx.fillStyle = '#00FF00';
    oCtx.fillRect(oBone.x, oBone.y, oBone.w, oBone.h);

    oCtx.fillStyle = '#0000FF';
    oCtx.fillRect(oDog.x, oDog.y, oDog.w, oDog.h);*/

    oCtx.drawImage(oBoneImage, oBone.x, oBone.y, oBone.w, oBone.h);
    oCtx.drawImage(oDogImage, oDog.x, oDog.y, oDog.w, oDog.h);

    oCtx.fillStyle = '#0000FF';

    oCtx.font = "20px Georgia";
    oCtx.fillText("Score - " + iScore, 10, 20);

    oCtx.font = "20px Georgia";
    oCtx.fillText("Time - " + parseInt(iElapsed / 60, 10)
        + ":" + iElapsed % 60, 10, 40);



}



function initGame() {
    'use strict';

    eCanvas = document.getElementById("myCanvas");
    oCtx = eCanvas.getContext("2d");
    oDog = { x: 0, y: 0, h: 50, w: 50 };
    oBone = { x: 0, y: 0, h: 50, w: 50 };

    oDogImage = document.createElement('img');
    oDogImage.src = 'images/dog.png';

    oBoneImage = document.createElement('img');
    oBoneImage.src = 'images/bone.png';

    oGardenImage = document.createElement('img');
    oGardenImage.src = 'images/garden.png';

    document.onkeydown = function (e) {
        e = e || window.event;
        //console.log('keyevent');
        switch (e.keyCode) {
        case 37:
            if (oBone.x - 1 >= 0) {
                oDog.x -= 1;
            }
            break;
        case 38:
            if (oBone.y - 1 >= 0) {
                oDog.y -= 1;
            }
            break;
        case 39:
            if (oBone.x + 1 <= 500) {
                oDog.x += 1;
            }
            break;
        case 40:
            if (oBone.y + 1 <= 500) {
                oDog.y += 1;
            }
            break;
        }
    };

    iStart = setInterval(drawScene, 10); // loop drawScene
    iGameTimer = setInterval(countTimer, 1000);

    resetGame();
}





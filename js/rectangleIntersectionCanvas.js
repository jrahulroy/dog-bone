function fill(oRect, sColor, oCtx) {
    'use strict';

    oCtx.fillStyle = sColor;
    oCtx.fillRect(oRect.iX, oRect.iY, oRect.iW, oRect.iH);
    //oCtx.fill();
}

function Rectangle(iX, iY, iW, iH) {
    'use strict';

    this.iX = iX;
    this.iY = iY;
    this.iW = iW;
    this.iH = iH;
}

function intersect(oRect1, oRect2) {
    'use strict';
    var iX, iY, iW, iH, oRect3;

    if (oRect1.iX > oRect2.iX &&
            oRect1.iX < oRect2.iX + oRect2.iW) {
        iX = oRect1.iX;
        iW = oRect2.iX + oRect2.iW - iX;
    } else if (oRect2.iX > oRect1.iX &&
                    oRect2.iX < oRect1.iX + oRect1.iW) {
        iX = oRect2.iX;
        iW = oRect1.iX + oRect1.iW - iX;
    }

    if (oRect1.iY > oRect2.iY &&
            oRect1.iY < oRect2.iY + oRect2.iH) {
        iY = oRect1.iY;
        iH = oRect2.iY + oRect2.iH - iY;
    } else if (oRect2.iY > oRect1.iY &&
            oRect2.iY < oRect1.iY + oRect1.iH) {
        iY = oRect2.iY;
        iH = oRect1.iY + oRect1.iH - iY;
    }

    oRect3 = new Rectangle(iX, iY, iW, iH);
    return oRect3;
}
function draw() {
    'use strict';
    var eCanvas, oCtx, oRect1, oRect2, oRect3, oGrd;

    eCanvas = document.getElementById("myCanvas");
    oCtx = eCanvas.getContext("2d");
    oRect1 = new Rectangle(50, 50, 300, 150);
    oRect2 = new Rectangle(100, 100, 400, 200);

    fill(oRect1, '#FF0000', oCtx);
    fill(oRect2, '#00FF00', oCtx);

    oRect3 = intersect(oRect1, oRect2);
    /*alert(oRect3.iX + ',' + oRect3.iY + ',' + oRect3.iW + ',' + oRect3.iH);*/
    fill(oRect3, '#0000FF', oCtx);

    oGrd = oCtx.createLinearGradient(0, 0, 200, 0);
    oGrd.addColorStop(0, "red");
    oGrd.addColorStop(1, "white");

    //oCtx.fillStyle = oGrd;
    fill(oRect3, oGrd, oCtx);

    oCtx.strokeStyle = '#00FFFF';
    oCtx.lineWidth = 4;
    //alert(oRect3.iX);
    oCtx.strokeRect(oRect3.iX, oRect3.iY, oRect3.iW, oRect3.iH);
}

function Rectangle(iX, iY, iW, iH) {
    'use strict';

    this.iX = iX;
    this.iY = iY;
    this.iW = iW;
    this.iH = iH;
}

function fill(oRect, sColor, eSVG) {
    'use strict';
    var sNS, oSVGObj;

    sNS = "http://www.w3.org/2000/svg";
    oSVGObj = document.createElementNS(sNS, "rect");

    oSVGObj.setAttribute("x", oRect.iX);
    oSVGObj.setAttribute("y", oRect.iY);
    oSVGObj.setAttribute("height", oRect.iH);
    oSVGObj.setAttribute("width", oRect.iW);
    oSVGObj.style.fill = sColor;
    oSVGObj.style.stroke = 'black';
    eSVG.appendChild(oSVGObj);
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
    var eSVG, oRect1, oRect2, oRect3;

    eSVG = document.getElementById("mySVG");

    oRect1 = new Rectangle(50, 50, 300, 150);
    oRect2 = new Rectangle(100, 100, 400, 200);

    fill(oRect1, '#FF0000', eSVG);
    fill(oRect2, '#00FF00', eSVG);

    oRect3 = intersect(oRect1, oRect2);
    //alert(oRect3.iX + ',' + oRect3.iY + ',' + oRect3.iW + ',' + oRect3.iH);
    fill(oRect3, "url(#grad1)", eSVG);
}
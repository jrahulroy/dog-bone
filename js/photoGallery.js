function changeImage(e) {
    'use strict';
    var sImage = e.target.getAttribute('xlink:href');
    document.getElementById('hero').setAttribute('xlink:href', sImage);
    /*alert(this.getAttribute('xlink:href'));*/
}
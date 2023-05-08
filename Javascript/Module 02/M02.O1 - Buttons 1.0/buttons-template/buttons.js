function changefoto(e, bgImage, imgSrc, btn1, btn2, btn3) {
    var img = document.getElementById('image');
    img.src = bgImage;
    e.innerText = parseInt(e.innerText) + 1;

    var img2 = document.getElementById('image2');
    img2.src = imgSrc;

    document.getElementById('button1').disabled = btn1;
    document.getElementById('button2').disabled = btn2;
    document.getElementById('button3').disabled = btn3;
}

function changefoto1(e) {
    changefoto(e, 'images/bg1.jpg', 'images/1.jpg', true, false, false);
}

function changefoto2(e) {
    changefoto(e, 'images/bg2.jpg', 'images/2.jpg', false, true, false);
}

function changefoto3(e) {
    changefoto(e, 'images/bg3.jpg', 'images/3.jpg', false, false, true);
}
var lastClickedButton = null;

function changefoto(button) {
    if (button !== lastClickedButton) {
        var img = document.getElementById('image');
        img.src = 'images/bg1.jpg';

        var img2 = document.getElementById('image2');
        img2.src = 'images/1.jpg';

        button.innerText = parseInt(button.innerText) + 1;
        button.style.backgroundColor = 'red'; 

        if (lastClickedButton !== null) {
            lastClickedButton.style.backgroundColor = '#4baf53'; 
            lastClickedButton.disabled = false; 
        }

        lastClickedButton = button;
        button.disabled = true; 
    }
}

function changefoto2(button) {
    if (button !== lastClickedButton) {
        var img = document.getElementById('image');
        img.src = 'images/bg2.jpg';

        var img2 = document.getElementById('image2');
        img2.src = 'images/2.jpg';

        button.innerText = parseInt(button.innerText) + 1;
        button.style.backgroundColor = 'red';

        if (lastClickedButton !== null) {
            lastClickedButton.style.backgroundColor = '#4baf53';
            lastClickedButton.disabled = false;
        }

        lastClickedButton = button;
        button.disabled = true;
    }
}

function changefoto3(button) {
    if (button !== lastClickedButton) {
        var img = document.getElementById('image');
        img.src = 'images/bg3.jpg';

        var img2 = document.getElementById('image2');
        img2.src = 'images/3.jpg';

        button.innerText = parseInt(button.innerText) + 1;
        button.style.backgroundColor = 'red';

        if (lastClickedButton !== null) {
            lastClickedButton.style.backgroundColor = '#4baf53';
            lastClickedButton.disabled = false;
        }

        lastClickedButton = button;
        button.disabled = true;
    }
}
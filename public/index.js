console.log('Hola Mundo!!!');



window.onload = function () {
    let visible = true;
    const ewe1 = document.getElementById('ewe');
    const jaja = document.getElementById('jaja');

    function display() {
        visible = !visible;
        if (visible) {
            ewe1.className = '';
        } else {
            ewe1.className = 'gatoto';
        }
    }

    jaja.onclick = display;
};
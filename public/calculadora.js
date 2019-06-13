window.onload = function () {
    let operator = '';
    const box = document.getElementById('box');
    const col = document.getElementsByClassName('col-4');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');

    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const btn7 = document.getElementById('btn7');
    const btn8 = document.getElementById('btn8');

    const btn9 = document.getElementById('btn9');
    const btn0 = document.getElementById('btn0');
    const ceh = document.getElementById('ceh');
    const multi = document.getElementById('multi');

    const minus = document.getElementById('minus');
    const dot = document.getElementById('dot');
    const divi = document.getElementById('divi');
    const sum = document.getElementById('sum');

    const equal = document.getElementById('equal');

    console.log(col);
    console.log(btn1);

    function clickBtn(typeBtn) {
        if(typeBtn == 'c') {
            box.value = '';
        } else if(typeBtn == '=') {
            console.log(box.value);
            let value1 = 0;
            let value2 = 0;

            switch (operator) {
                case '-':
                    value1 = box.value.split(operator)[0];
                    value2 = box.value.split(operator)[1];
                    box.value = value1 - value2;
                    break;
                case 'x':
                    value1 = box.value.split(operator)[0];
                    value2 = box.value.split(operator)[1];
                    box.value = value1 * value2;
                    break;
                case '+':
                    value1 = box.value.split(operator)[0];
                    value2 = box.value.split(operator)[1];
                    box.value = Number(value1) + Number(value2);
                    break;
                case '/':
                    value1 = box.value.split(operator)[0];
                    value2 = box.value.split(operator)[1];
                    box.value = value1 / value2;
                    break;
            }
        } else {
            box.value += typeBtn;
        }
    }

    btn1.onclick = function () {
        clickBtn(1);
    };
    btn2.onclick = function () {
        clickBtn(2);
    };
    btn3.onclick = function () {
        clickBtn(3);
    };
    btn4.onclick = function () {
        clickBtn(4);
    };
    btn5.onclick = function () {
        clickBtn(5);
    };
    btn6.onclick = function () {
        clickBtn(6);
    };
    btn7.onclick = function () {
        clickBtn(7);
    };
    btn8.onclick = function () {
        clickBtn(8);
    };
    btn9.onclick = function () {
        clickBtn(9);
    };
    minus.onclick = function () {
        operator = '-';
        clickBtn('-');
    };
    btn0.onclick = function () {
        clickBtn(0);
    };
    dot.onclick = function () {
        clickBtn('.');
    };
    ceh.onclick = function () {
        clickBtn('c');
    };
    multi.onclick = function () {
        operator = 'x';
        clickBtn('x');
    };
    equal.onclick = function () {
        clickBtn('=');
    };
    sum.onclick = function () {
        operator = '+';
        clickBtn('+');
    };
    divi.onclick = function () {
        operator = '/';
        clickBtn('/');
    };


};
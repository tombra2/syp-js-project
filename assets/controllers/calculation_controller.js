import {Controller} from '@hotwired/stimulus';


export default class extends Controller {
    connect() {
        const r1 = document.getElementById('r1');
        const r2 = document.getElementById('r2');
        const r3 = document.getElementById('r3');
        const serial = document.getElementById('btn-s');
        const para = document.getElementById('btn-p');
        const result = document.getElementById('result');
        let r = 0;

        function serialCalc() {
            r = parseFloat(r1.value) + parseFloat(r2.value) + parseFloat(r3.value);
            result.innerText = "Der Serienwiderstand ist " + r + "Ohm";
        }

        serial.addEventListener('click', serialCalc);


        function paraCalc() {
            r = 1 / (1 / parseFloat(r1.value) + 1 / parseFloat(r2.value) + 1 / parseFloat(r3.value));
            r.toFixed(2)
            result.innerText = "Der Parallelwiderstand ist " + r + "Ohm";
        }

        para.addEventListener('click', paraCalc)


    }
}

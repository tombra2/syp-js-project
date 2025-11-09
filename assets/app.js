import './stimulus_bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';


const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const serial = document.getElementById('btn-s');
const para = document.getElementById('btn-p');
const result = document.getElementById('result');
const stepsEl = document.getElementById('step');
const startEl  = document.getElementById('ustart');
const stopEl  = document.getElementById('ustop');
const showTable = document.getElementById('show-table')
const resiEl = document.getElementById('resi')
let r = 0;

function serialCalc() {
    r = parseFloat(r1.value) + parseFloat(r2.value) + parseFloat(r3.value);
    result.innerText = "Der Serienwiderstand ist " + r + "Ohm";
}

serial.addEventListener('click',serialCalc);


function paraCalc() {
    r= 1/(1/parseFloat(r1.value) + 1/parseFloat(r2.value) + 1/parseFloat(r3.value));
    r.toFixed(2)
    result.innerText = "Der Parallelwiderstand ist " + r + "Ohm";
}

para.addEventListener('click',paraCalc)


function calcTableValues(event){
    event.preventDefault()
    let output = "";
    let steps = parseFloat(stepsEl.value)
    let start = parseFloat(startEl.value)
    let stop= parseFloat(stopEl.value)
    let stepWith = (stop-start)/steps

    for (let u =start; u <=stop; u+=stepWith) {
        const i = u/r;
        output += "<tr>" + "<td>"+ u +"</td>" + "<td>"+ i +"</td>" + "</tr>"



    }
    resiEl.innerHTML = output;

}
showTable.addEventListener('click',calcTableValues)





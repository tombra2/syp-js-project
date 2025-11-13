import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    const stepsEl = document.getElementById('step');
    const startEl = document.getElementById('ustart');
    const stopEl = document.getElementById('ustop');
    const showTable = document.getElementById('show-table');
    const resiEl = document.getElementById('resi');
    const resistorEl = document.getElementById('resistor');

    const calcTableValues = (event) => {
      event.preventDefault();
      let output = "";
      let steps = parseFloat(stepsEl.value);
      let start = parseFloat(startEl.value);
      let stop = parseFloat(stopEl.value);
      let r = parseFloat(resistorEl.value);
      let stepWith = (stop - start) / steps;

      for (let u = start; u <= stop; u += stepWith) {
        const i = u / r;
        output += "<tr><td>" + u + "</td><td>" + i + "</td></tr>";
      }
      resiEl.innerHTML = output;
    };

    showTable.addEventListener('click', calcTableValues);
  }
}

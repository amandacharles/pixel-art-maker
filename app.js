(function() {
  'use strict';

const gridDiv = document.getElementById('grid');


gridDiv.addEventListener('click', (event) => {
let theBox = event.target;
console.log(theBox);
  if (event.target === gridDiv) {
    return;
  }
   theBox.classList.toggle('red');
} )













})();

(function() {
  'use strict';

const gridDiv = document.getElementById('grid');
const pinkColor = document.getElementById('pink');
const yellowColor = document.getElementById('yellow')

yellowColor.addEventListener('click', (event) => {

})

pinkColor.addEventListener('click', (event) => {


})


gridDiv.addEventListener('click', (event) => {
let theBox = event.target;
  if (event.target === gridDiv) {
    return;
  }
   theBox.classList.toggle('red');
} )



if pallette box on, toggle theBox









})();

(function() {
  'use strict';

const gridDiv = document.getElementById('grid');
const paletteDiv = document.getElementById('thePalette')
const colorsInPalette = document.getElementById('thePalette').children;
let theOnColor;

paletteDiv.addEventListener('click', (event) => {
  theOnColor = event.target;
  if (event.target === paletteDiv){
    return;
  }


  for (let i = 0; i < colorsInPalette.length; i++) {
    colorsInPalette[i].classList.remove('on');
  }

  theOnColor.classList.toggle('on');
  console.log(theOnColor);

})
// ****************************







// *******************

gridDiv.addEventListener('click', (event) => {
  let useColor = theOnColor.getAttribute('id');

console.log(useColor);
let theBox = event.target;
  if (event.target === gridDiv) {
    return;
  }
   theBox.classList.toggle(useColor);


} )













})();

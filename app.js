(function() {
  'use strict';

const gridDiv = document.getElementById('grid');
const paletteDiv = document.getElementById('thePalette')
const colorsInPalette = document.getElementById('thePalette').children;
let theOnColor;
let useColor

paletteDiv.addEventListener('click', (event) => {
  theOnColor = event.target;
  useColor = theOnColor.getAttribute('id');
  if (event.target === paletteDiv){
    return;
  }
  for (let i = 0; i < colorsInPalette.length; i++) {
    colorsInPalette[i].classList.remove('on');
  }
  theOnColor.classList.toggle('on');
})

gridDiv.addEventListener('click', (event) => {
let theBox = event.target;
  if (event.target === gridDiv) {
    return;
  }
  theBox.style.backgroundColor = useColor;
})
})();

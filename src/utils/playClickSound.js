const mouseDownSound = new Audio(require('../assets/mouseDown.mp3'));
const mouseUpSound = new Audio(require('../assets/mouseUp.mp3'));

export function playMouseDownSound() {
  mouseDownSound.currentTime = 0;
  mouseDownSound.volume = 0.5;
  mouseDownSound.play();
}

export function playMouseUpSound() {
  mouseUpSound.currentTime = 0;
  mouseUpSound.volume = 0.5;
  mouseUpSound.play();
}
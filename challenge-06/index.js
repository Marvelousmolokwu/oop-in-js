const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();

  secondHand.textContent = seconds;

  const mins = now.getMinutes();
 
  minsHand.textContent = mins;
  const hour = now.getHours();


  hourHand.textContent = hour;
}

setInterval(setDate, 1000);

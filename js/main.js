// const secondHand = document.querySelector(".second-hand");
// const minsHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");

// function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const secondsDegrees = (seconds / 60) * 360 + 90;
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

//   const mins = now.getMinutes();
//   const minsDegrees = (mins / 60) * 360 + 90;
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;

//   const hour = now.getHours();
//   const hourDegrees = (hour / 12) * 360 + 90;
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);

// Select clock hands
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; // Add 90 degrees offset for alignment
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90; // Add seconds adjustment
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // Hours
  const hour = now.getHours();
  const hourDegrees = (hour % 12) * 30 + (mins / 60) * 30 + 90; // Adjust for minute
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Call setDate every second
setInterval(setDate, 1000);

const boxEl = document.querySelector(".js-box");
const timerEl = document.querySelector(".js-timer");
console.log(boxEl);

let counter = 11;
setTimeout(() => {
  boxEl.style.display = "block";
  const id = setInterval(() => {
    counter -= 1;
    timerEl.textContent = counter;
    if (counter < 0) {
      clearInterval(id);
      boxEl.style.display = "none";
    }
  }, 1000);
}, 3000);

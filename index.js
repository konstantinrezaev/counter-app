const counterText = document.querySelector('[data-find="counterValue"]');
const addOnePoolBtn = document.getElementById("addOnePoolBtn");
const addTwoPoolBtn = document.getElementById("addTwoPoolBtn");
const resetBtn = document.getElementById("resetBtn");

console.log(addOnePoolBtn.dataset);
console.log(addTwoPoolBtn.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterText.innerText = counter;

addOnePoolBtn.addEventListener("click", function () {
  counter = counter + parseInt(addOnePoolBtn.dataset.pools);
  counterText.innerText = counter;
});

addTwoPoolBtn.addEventListener("click", function () {
  counter = counter + parseInt(addTwoPoolBtn.dataset.pools);
  counterText.innerText = counter;
});

resetBtn.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
});

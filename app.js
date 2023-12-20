const bars = document.querySelector("#bars");
const times = document.querySelector("#times");
const langNav = document.querySelector(".lang");
let navOne=document.querySelector('.nav1')
const barsTwo = document.querySelector("#bars2");
const timesTwo = document.querySelector("#times2");
const selectOne = document.querySelector(".select1");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  times.classList.toggle("active");
    langNav.classList.toggle("active");
    // navOne.classList.add('active')
});
times.addEventListener("click", () => {
  bars.classList.toggle("active");
  times.classList.toggle("active");
  langNav.classList.toggle("active");
});
barsTwo.addEventListener("click", () => {
  barsTwo.classList.toggle("active");
  timesTwo.classList.toggle("active");
  selectOne.classList.toggle("active");
});
timesTwo.addEventListener("click", () => {
  barsTwo.classList.toggle("active");
  timesTwo.classList.toggle("active");
  selectOne.classList.toggle("active");
});

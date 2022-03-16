const clockTitle = document.querySelector(".js-clock");
const Xmas = new Date("2022-12-25T00:00:00+0900");
const xmasYears = Xmas.getFullYear();
const xmasMonths = Xmas.getMonth() + 1;
const xmasDay = Xmas.getDay();

function countdown() {
  const nowTime = new Date();
  const distance = Xmas.getTime() - nowTime.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

countdown();
setInterval(countdown, 1000);

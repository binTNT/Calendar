let showDay = document.getElementById("show-day");
let showMonthYear = document.getElementById("show-month-year");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentDay = new Date().getDate();

function dis() {
  showMonthYear.innerHTML = currentMonth + 1 + " - " + currentYear;
  showDay.innerHTML = "";
  var thisMonth = new Date().getMonth();
  var thisYear = new Date().getFullYear();
  for (let i = 0; i < getStartDay() - 1; i++) {
    showDay.innerHTML += `<li class="day"></li>`;
  }
  for (let i = 0; i < getDayOfMonth(); i++) {
    if (
      i + 1 == currentDay &&
      currentMonth == thisMonth &&
      currentYear == thisYear
    )
      showDay.innerHTML += `<li class="day inside" id="outside">${i + 1}</li>`;
    else showDay.innerHTML += `<li class="day inside">${i + 1}</li>`;
  }
}

function oclock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  const d = new Date();
  hours.innerHTML = check_(d.getHours());
  minutes.innerHTML = check_(d.getMinutes());
  seconds.innerHTML = check_(d.getSeconds());
}

function check_(n) {
  if (n < 10) return "0" + n;
  else return n;
}

function next() {
  if (currentMonth == 11) {
    currentMonth = 0;
    currentYear++;
  } else currentMonth++;
  setTimeout(dis, 0);
}

function before() {
  if (currentMonth == 0) {
    currentMonth = 11;
    currentYear--;
  } else currentMonth--;
  setTimeout(dis, 0);
}

function getDayOfMonth() {
  return new Date(currentYear, currentMonth + 1, 0).getDate();
}

function getStartDay() {
  return new Date(currentYear, currentMonth, 1).getDay();
}

function rand() {
  return Math.floor(Math.random() * 255) + 1;
}
console.log(currentDay);
setInterval(oclock, 0);
setTimeout(dis, 0);

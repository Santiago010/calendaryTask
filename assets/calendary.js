import { containerCalendar } from "./elements.js";

export let arrayMonths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date();
let currentDay = currentDate.getDate();
export let monthNumber = currentDate.getMonth();
export let currentYear = currentDate.getFullYear();

export const renderMonth = (parameterMonth) => {
  for (let i = startDay(); i > 0; i--) {
    containerCalendar.lastElementChild.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber - 1) - (i - 1)}
        </div>`;
  }

  for (let i = 1; i <= getTotalDays(parameterMonth); i++) {
    if (i === currentDay) {
      containerCalendar.lastElementChild.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
    } else {
      containerCalendar.lastElementChild.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
    }
  }
};

const getTotalDays = (parameterMonth) => {
  if (parameterMonth === -1) parameterMonth = 11;

  if (
    parameterMonth == 0 ||
    parameterMonth == 2 ||
    parameterMonth == 4 ||
    parameterMonth == 6 ||
    parameterMonth == 7 ||
    parameterMonth == 9 ||
    parameterMonth == 11
  ) {
    return 31;
  } else if (
    parameterMonth == 3 ||
    parameterMonth == 5 ||
    parameterMonth == 8 ||
    parameterMonth == 10
  ) {
    return 30;
  } else {
    return isLeap() ? 29 : 28;
  }
};

const isLeap = () => {
  return (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
    currentYear % 400 === 0
    ? true
    : false;
};

const startDay = () => {
  let start = new Date(currentYear, monthNumber, 1);
  return start.getDate() - 1 === -1 ? 6 : start.getDay() - 1;
};

const setNewDate = () => {
  currentDate.setFullYear(currentYear, monthNumber, currentDay);
  containerCalendar.firstElementChild.children[1].textContent =
    arrayMonths[monthNumber];

  containerCalendar.firstElementChild.children[2].textContent = currentYear.toString();
  containerCalendar.lastElementChild.textContent = "";
  renderMonth(monthNumber);
};

export function renderLastMonth() {
  if (monthNumber !== 0) {
    monthNumber--;
  } else {
    monthNumber = 11;
    currentYear--;
  }

  setNewDate();
}

export function renderNextMonth() {
  if (monthNumber !== 11) {
    monthNumber++;
  } else {
    monthNumber = 0;
    currentYear++;
  }

  setNewDate();
}

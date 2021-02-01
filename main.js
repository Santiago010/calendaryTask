import {
  containerCalendar,
  calendarInfo,
  form,
  containerTaskList,
} from "./assets/elements.js";
import {
  arrayMonths,
  monthNumber,
  currentYear,
  renderMonth,
  renderLastMonth,
  renderNextMonth,
} from "./assets/calendary.js";
import { handlerDataForm } from "./assets/categoryTask.js";

handlerDataForm();

containerTaskList.previousElementSibling.lastElementChild.firstElementChild.addEventListener(
  "click",
  () => {
    console.log(containerTaskList.childNodes);
    containerTaskList.childNodes.forEach((child) => {
      child.remove();
    });
  }
);

window.addEventListener("load", () => {
  renderMonth(monthNumber);
  containerCalendar.firstElementChild.children[1].textContent =
    arrayMonths[monthNumber];
  containerCalendar.firstElementChild.children[2].textContent = currentYear.toString();
  const calendarDate = document.querySelectorAll(".calendar__date");
  calendarDate.forEach((date) => {
    date.addEventListener("click", () => {
      form.children[3].value = `${calendarInfo.children[1].textContent}-${calendarInfo.children[2].textContent}-${date.textContent}`;
    });
  });
});
containerCalendar.firstElementChild.firstElementChild.addEventListener(
  "click",
  () => {
    renderLastMonth();
    const calendarDate = document.querySelectorAll(".calendar__date");
    calendarDate.forEach((date) => {
      date.addEventListener("click", () => {
        form.children[3].value = `${calendarInfo.children[1].textContent}-${calendarInfo.children[2].textContent}-${date.textContent}`;
      });
    });
  }
);
containerCalendar.firstElementChild.lastElementChild.addEventListener(
  "click",
  () => {
    renderNextMonth();
    const calendarDate = document.querySelectorAll(".calendar__date");
    calendarDate.forEach((date) => {
      date.addEventListener("click", () => {
        form.children[3].value = `${calendarInfo.children[1].textContent}-${calendarInfo.children[2].textContent}-${date.textContent}`;
      });
    });
  }
);

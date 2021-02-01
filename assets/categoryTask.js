import { form, containerProvisional, containerTaskList } from "./elements.js";

export const handlerDataForm = () => {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const dataForm = new FormData(ev.currentTarget);

    if (dataForm.get("date") === "") {
      console.log("vacio");
      swal({
        title: "Error",
        text: "Debes ingresar primero la fecha",
        icon: "error",
        button: "Ok",
      });
    } else {
      let dataInputDate = dataForm.get("date").split("-");
      console.group();
      console.info(
        `Fecha:\naño:${dataInputDate[0]}\nmes:${dataInputDate[1]}\ndia:${dataInputDate[2]}`
      );
      console.info(
        `Datos\ncolor${dataForm.get("color")}\ncategoria:${dataForm.get(
          "category"
        )}\ntarea:${dataForm.get("task")}`
      );
      console.groupEnd();
      containerProvisional.remove();
      let containerItemTask = document.createElement("div");
      containerItemTask.classList.add("container-item-task");
      containerItemTask.style.backgroundColor = dataForm.get("color");
      containerItemTask.innerHTML = `<h4>Fecha:${dataInputDate[0]} / ${
        dataInputDate[1]
      } / ${dataInputDate[2]}</h4>
      <span>Categoria: ${dataForm.get("category")}</span>
      <p>Tarea:${dataForm.get("task")}</p>
      <button class="btn-finish">Finalizada</button>`;
      containerTaskList.appendChild(containerItemTask);
      const btnFinish = document.querySelector(".btn-finish");
      btnFinish.addEventListener("click", () => {
        setTimeout(() => {
          btnFinish.parentElement.remove();
        }, 1000);
      });
      form.childNodes.forEach((input) => {
        input.nodeValue = "";
      });
    }
  });
};

const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");

btnAgregar.addEventListener("click", () => {
    console.log(inputTarea.value);

    if (inputTarea.value.trim() !== "" ) {
         const li = document.createElement("li");
    
    li.className = "list-group-item d-flex justify-content-between";

    li.innerHTML = `
        <span>${inputTarea.value}</span>
        <button class=“btn btn-danger btn-sm”>X</button>
    `;
    const botonBorrar = li.querySelector("button");
   botonBorrar.addEventListener("click" , () => {
    li.remove();
   });
    listaTareas.append(li);
    inputTarea.value = "";
    inputTarea.focus();

   } else {
         alert ("Debes ingresar una tarea");
      }
   });

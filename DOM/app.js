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
        <div>
        <button class="btn btn-warning btn-sm btn-prioridad">
        Prioridad
        </button>
        <button class="btn btn-danger btn-sm btn-borrar">
        X
        </button>
        </div>
    `;
    const botonPrioridad = li.querySelector(".btn-prioridad");
    const botonBorrar = li.querySelector(".btn-borrar");
   botonBorrar.addEventListener("click" , () => {
    li.remove();
   });

   botonPrioridad.addEventListener("click" , () => {
   li.classList.toggle("bg-warning");
   });

    listaTareas.append(li);
    inputTarea.value = "";
    inputTarea.focus();

   } else {
         alert ("Debes ingresar una tarea");
      }
   });


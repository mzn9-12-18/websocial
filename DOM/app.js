const btnAgregar = document.querySelector("#btnAgregar");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");

btnAgregar.addEventListener("click", () => {
   // console.log(inputTarea.value); 

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



  

   // ejercicio extra

   const seleccionArgentina = [
  "Lionel Scaloni",
  "Juan Musso", // 1
  "Marcos Senesi", // 2
  "Nicolas Tagliafico", // 3
  "Gonzalo Montiel", // 4
  "Leandro Paredes", // 5
  "Lisandro Martinez", // 6
  "Rodrigo De Paul", // 7
  "Valentin Barco", // 8
  "Julian Alvarez", // 9
  null, // 10
  "Giovani Lo Celso", // 11
  "Geronimo Rulli", // 12
  "Cuti Romero", // 13
  "Exequiel Palacios", // 14
  "Nicolas González", // 15
  "Thiago Almada", // 16
  "Giuliano Simeone", // 17
  "Nico Paz", // 18
  "Nicolas Otamendi", // 19
  "Alexis Mac Allister", // 20
  "Jose Manuel Lopez", // 21
  "Lautaro Martinez", // 22
  "Emiliano Martinez", // 23
  "Enzo Fernandez", // 24
  "Facundo Medina", // 25
  "Nahuel Molina", // 26
];

seleccionArgentina.splice(10, 1, "Lionel Andres Messi");
seleccionArgentina.splice(1, 1, "Emiliano Martinez");
seleccionArgentina.splice(-1, 1);

for (let i = 0; i < seleccionArgentina.length; i++) {
    console.log(seleccionArgentina[i]);
}
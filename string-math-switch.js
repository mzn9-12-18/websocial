// tarea de String


let frase = (prompt("Ingrese una frase"));
let palabra = (prompt("Busca una palabra"));
let frase = frase.toLowerCase().trim();
let frase = palabra.toLowerCase().trim();


if (frase.includes(palabra)) {
    console.log ( "✅ se encontro la palabra" )
}
else {
    console.log ("❌ no se encontro la palabra")
}


//tarea math
let numeroUsuario = Number(prompt("Ingrese un numero"));
let numeroSecreto = Math.floor(Math.random() * 10 ) + 1;

if (numeroUsuario === numeroSecreto) {
    console.log ("🎉 Felicidades Ganaste")
}
else {
   console.log ("😢 Perdiste. El numero secreto era" + numeroSecreto);
}


//tarea con switch

let menu = (prompt("que menu deseas hoy?\n 1- 🥩carne\n  2- 🐟pescado\n 3- 🥬verdura"));

 switch (menu) {
    case "carne":
        console.log ("🍷 se recomienda Vino tinto")
        
        break; 
    case "pescado":
        console.log ("🥂 se recomienda Vino blanco")
        
        break; 
        case "verdura":
        console.log ("💧 se recomienda Agua")
        
        break; 
    default:
        console.log ("elija carne, pescado o verdura")
        break;
}
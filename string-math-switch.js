// tarea de String


let frase = (prompt("Ingrese una frase"));
let palabra = (prompt("Busca una palabra"));

if (frase.includes(palabra)) {
    console.log ( "✅ se encontro la palabra" )
}
else {
    console.log ("❌ no se encontro la palabra")
}


//tarea math
let numeroUsuario = Number(prompt("Ingrese un numero"));
let numeroSecreto = Math.ceil(Math.random())*10

if (numeroUsuario === numeroSecreto) {
    console.log ("🎉 Felicidades Ganaste")
}
else {
   console.log ("😢 Perdiste")
}
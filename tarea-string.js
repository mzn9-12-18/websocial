// tarea de String


let frase = (prompt("Ingrese una frase"));
let palabra = (prompt("Busca una palabra"));

if (frase.includes(palabra)) {
    console.log ( "✅ se encontro la palabra" )
}
else {
    console.log ("❌ no se encontro la palabra")
}

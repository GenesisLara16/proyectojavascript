//funciones 

function generateNumber (max) {
    return Math.floor(Math.random() * max)
}

function tryNumber (mind, secret) {
    if (mind == secret) {
        alert ("¡Felicidades! El número es el " + secret) 
        return true
    } else if (mind < secret) {
        alert ("El número secreto es mayor que " + mind)
    } else {
        alert ("El número secreto es menor que " + mind)
    }
    return false
}

function askRiddle () {
    return prompt ("En este banco están sentados un padre y un hijo, el padre se llama Juan y el hijo ya te lo he dicho. ¿Cómo se llama el hijo?")
}

function askNumber () {
    return prompt ("Estoy pensando en un número entre 0 y 500. ¿Qué número es?")
}

//el usuario debe contestar correctamnte a la  adivinanza para poder jugar a LEEME LA MENTE

let riddleAnswer = askRiddle ()
console.log ("El usuario ha respondido: " + riddleAnswer)

while ((riddleAnswer != "Esteban") && (riddleAnswer != "esteban")){
    alert ("Eres un Caca, " + riddleAnswer + " no es la respuesta. Vuelve a intentarlo.")
    riddleAnswer = askRiddle ()
    console.log ("El usuario ha respondido: " + riddleAnswer)
}

alert ("Correcto. Ahora trata de leerme la mente")


//aqui empieza el juego LEEME LA MENTE 
//Variables

let mindAnswer = askNumber ()
console.log ("El usuario ha respondido: " + mindAnswer)

let secretNumber = generateNumber(500)
console.log ("Ha puesto el número " + secretNumber)

while (!tryNumber (mindAnswer, secretNumber)){
    mindAnswer = askNumber ()
    console.log ("El usuario ha respondido " +  mindAnswer)
}

function generateNumber(max) {
    return Math.floor(Math.random() * max)
}

function tryNumber() {
    let num = document.getElementById("answerBox").value

    if (num == secretNumber) {
        document.getElementById("correctNumber").innerHTML = secretNumber
        document.getElementById("intronum").style.display = "none"
        document.getElementById("answer").style.display = "block"
    } else if (num < secretNumber) {
        alert ("el número secreto es mayor")
    } else {
        alert ("el número secreto es menor")
    }
}

function resetGame(){
    secretNumber = generateNumber(500)
    document.getElementById("intronum").style.display = "block"
    document.getElementById("answer").style.display = "none"
}

let riddleAnswer = prompt ("En este banco están sentados un padre y un hijo, el padre se llama Juan y el hijo ya te lo he dicho. ¿Cómo se llama el hijo?")

while ((riddleAnswer != "Esteban") && (riddleAnswer != "esteban")){
    alert ("Eres un Caca, " + riddleAnswer + " no es la respuesta. Vuelve a intentarlo.")
    riddleAnswer = prompt ("En este banco están sentados un padre y un hijo, el padre se llama Juan y el hijo ya te lo he dicho. ¿Cómo se llama el hijo?")
}

alert("Correcto")

let secretNumber = generateNumber(500)

document.getElementById("answerButton").onclick = tryNumber

document.getElementById("resetButton").onclick = resetGame



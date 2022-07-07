btn.addEventListener('click', function(){
var b = prompt("Por favor digite sua altura:");
var c = prompt("Agora digite o seu peso:");
                        
var imc = c / (b * b);
                        
if (imc < 18.5) {
     alert("Você está abaixo do peso e o resultado é " + imc.toFixed(2));
} else if (imc <= 24.9) {
    alert("Você está com o peso normal e o resultado é " + imc.toFixed(2));
} else if (imc <= 29.9) {
    alert("Você está com sobrepeso e o resultado é " + imc.toFixed(2));
} else if (imc <= 34.9) {
    alert("Você está com obesidade grau 1 e o resultado é " + imc.toFixed(2));
} else if (imc <= 39.9) {
    alert("Você está com obesidade grau 2 e o resultado é " + imc.toFixed(2));
} else if (imc >= 40) {
    alert("Você está com obesidade grau 3 e o resultado é " + imc.toFixed(2));
} else {
    alert("Por favor digite um valor válido.");
}
})
                
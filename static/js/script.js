//Obtenemos el operador
//primero suma ya que es el que viene por defecto
let operador = "suma";
let valor; 


document.getElementById("resta").addEventListener("click", () => operador = "resta");
document.getElementById("division").addEventListener("click", () => operador = "division");
document.getElementById("multiplicacion").addEventListener("click", () => operador = "multiplicacion");
document.getElementById("suma").addEventListener("click", () => operador = "suma");
document.getElementById("button").addEventListener("click", () => {
    let valor1 = document.getElementById("number1").value;
    let valor2 = document.getElementById("number2").value;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    
    switch(operador){
        case "resta": 
        valor = "Resultado: " + (valor1 - valor2);
        break;
        case "division": 
        valor = "Resultado: " + (valor1 / valor2);
        break;
        case "multiplicacion": 
        valor = "Resultado: " + (valor1 * valor2);
        break;
        default: 
        valor = "Resultado: " + (valor1 + valor2);
        break;
    }
    document.getElementById("result").innerHTML = valor;
})



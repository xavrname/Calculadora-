function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        console.error("Error: No se puede dividir por cero.");
        alert("Error: No se puede dividir por cero.");
        return null;
    }
    return a / b;
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt("Calculadora Básica\nSeleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        
        if (["1", "2", "3", "4"].includes(opcion)) {
            let num1 = parseFloat(prompt("Ingrese el primer número:"));
            let num2 = parseFloat(prompt("Ingrese el segundo número:"));

            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Debes ingresar números válidos.");
                continue;
            }

            let resultado;
            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    break;
                case "2":
                    resultado = restar(num1, num2);
                    break;
                case "3":
                    resultado = multiplicar(num1, num2);
                    break;
                case "4":
                    resultado = dividir(num1, num2);
                    break;
            }
            if (resultado !== null) {
                alert("El resultado es: " + resultado);
            }
        } else if (opcion !== "5") {
            alert("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "5");
    
    alert("¡Adiós!");
}

window.onload = function() {
    const mensajeElemento = document.getElementById("mensaje");
    if (mensajeElemento) {
        mensajeElemento.textContent = "La calculadora se ejecutará en la consola del navegador.";
    }
    mostrarMenu();
};

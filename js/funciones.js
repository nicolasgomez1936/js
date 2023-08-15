// primer pre entrega usando los condicionales y ciclos
//delcaracion de variables 
let saldoInicial = prompt("ingrese el monto con el cual desea operar");
let saldoActual = saldoInicial;
//interaccion con el usuario
alert("¡Bienvenido a la gestion de cuenta");
while (true) {
  console.log(`Tu saldo actual es: ${saldoActual}`);

  let opcion = prompt("¿Deseas realizar una operacion? (s/n): ");

  if (opcion === "s") {
    let cantidad = parseFloat(prompt("Ingresa la cantidad a operar: "));

    if (cantidad <= saldoActual ) {
      alert("operacion exitosa.");
    } else {
      alert("No tienes suficiente saldo para realizar esta operacion.");
    }
  } else if (opcion === "n") {
    break;
  } else {
    alert("Opción invalida. Por favor, selecciona 's' o 'n'.");
  }
}

alert(`Gracias por utilizar esta gestion de cuenta Tu saldo final es: ${saldoActual}`);
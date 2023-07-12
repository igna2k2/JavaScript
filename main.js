// Simulador interactivo
function simuladorInteractivo() {
    console.log("Simulador de Conversión de Yuan");
    let yuan = parseFloat(prompt("Ingresa la cantidad en yuan que deseas convertir:"));
  
    // Conversión a dólares
    const tipoCambioDolar = 0.14;
    let dolares = yuan * tipoCambioDolar
  
    // Determinar el mensaje de conversión
    let mensajeDolares = "";
    if (yuan === 1) {
      mensajeDolares = yuan + " yuan equivale a " + dolares + " dólares.";
    } else {
      mensajeDolares = yuan + " yuanes equivalen a " + dolares + " dólares.";
    }
  
    console.log(mensajeDolares);
  
    // Conversión a pesos
    const tipoCambioPeso = 40;
    let pesos = yuan * tipoCambioPeso;
  
    // Determinar el mensaje de conversión
    let mensajePesos = "";
    if (yuan === 1) {
      mensajePesos = yuan + " yuan equivale a " + pesos + " pesos.";
    } else {
      mensajePesos = yuan + " yuanes equivalen a " + pesos + " pesos.";
    }
  
    console.log(mensajePesos);
  }
  
  // Ejecución del simulador interactivo
  simuladorInteractivo();
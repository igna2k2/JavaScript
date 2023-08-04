// Conversión a dólares
const tipoCambioDolar = 0.14;

const conversionesIndividuales = [];

function agregarConversion() {
  const yuanInput = document.getElementById("yuanInput");
  const yuan = parseFloat(yuanInput.value);

  if (isNaN(yuan)) {
    alert("Debes ingresar una cantidad válida en yuan para realizar la conversión.");
    return;
  }

  yuanInput.value = "";

  const dolares = yuan * tipoCambioDolar;

  let mensajeDolares = "";
  if (yuan === 1) {
    mensajeDolares = yuan + " yuan equivale a " + dolares.toFixed(2) + " dólares.";
  } else {
    mensajeDolares = yuan + " yuanes equivalen a " + dolares.toFixed(2) + " dólares.";
  }

  conversionesIndividuales.push(dolares);

  const conversionIndividual = document.createElement("div");
  conversionIndividual.textContent = mensajeDolares;

  const resultadoIndividualSection = document.getElementById("resultadoDolares");
  resultadoIndividualSection.appendChild(conversionIndividual);
}

function calcularTotal() {
  if (conversionesIndividuales.length === 0) {
    alert("Debes agregar al menos una conversión antes de calcular el total.");
    return;
  }

  let totalDolares = 0;
  conversionesIndividuales.forEach((dolares) => {
    totalDolares += dolares;
  });

  const totalDolaresSection = document.getElementById("totalDolares");
  totalDolaresSection.textContent = `Inventario total en dólares: ${totalDolares.toFixed(2)} dólares.`;
}

function borrarNumero() {
  const yuanInput = document.getElementById("yuanInput");
  yuanInput.value = ""; 
}

function borrarConversiones() {
  const resultadoIndividualSection = document.getElementById("resultadoDolares");
  resultadoIndividualSection.innerHTML = "";

  const totalDolaresSection = document.getElementById("totalDolares");
  totalDolaresSection.textContent = "Inventario total en dólares: 0.00 dólares.";

  conversionesIndividuales.length = 0;
}
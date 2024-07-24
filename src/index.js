import analyzer from './analyzer.js';


const textArea = document.querySelector('[name="user-input"]');

// MÉTRICA| conteo-de-palabras

const contadorPalabras = document.querySelector('[data-testid="word-count"]');
textArea.addEventListener("input", resultadoContadorPalabras);

function  resultadoContadorPalabras(){
  contadorPalabras.innerHTML = 'Palabras: '+analyzer.getWordCount(textArea.value);
}


// MÉTRICA| conteo-de-caracteres

const contadorCaracteres = document.querySelector('[data-testid="character-count"]');
textArea.addEventListener("input", mostrarContadorCaracteres);

function mostrarContadorCaracteres(){
  contadorCaracteres.innerHTML = 'Caracteres: '+analyzer.getCharacterCount(textArea.value);
}


// MÉTRICA| conteo-de-caracteres-sin-espacios

const contadorCaracteresSin = document.querySelector('[data-testid="character-no-spaces-count"]');
textArea.addEventListener("input",mostrarContadorCaracteresSin);

function mostrarContadorCaracteresSin(){
  contadorCaracteresSin.innerHTML = 'Caracteres sin espacios: '+analyzer.getCharacterCountExcludingSpaces(textArea.value);
}


// MÉTRICA| longitud-promedio

const longitudPromedio = document.querySelector('[data-testid="word-length-average"]');
textArea.addEventListener("input", mostrarLongitudPromedio);

function mostrarLongitudPromedio(){
  longitudPromedio.innerHTML = 'Longitud promedio: '+analyzer.getAverageWordLength(textArea.value);
}


//MÉTRICA| números

const contadorNumeros = document.querySelector('[data-testid="number-count"]');
textArea.addEventListener("input",mostrarContadorNumeros);

function mostrarContadorNumeros(){
  contadorNumeros.innerHTML = 'Números: '+analyzer.getNumberCount(textArea.value);
}


//MÉTRICA| suma-de-números

const sumaNumeros = document.querySelector('[data-testid="number-sum"]');
textArea.addEventListener("input",mostrarSumaNumeros);

function mostrarSumaNumeros(){
  sumaNumeros.innerHTML = 'Suma de Números: '+analyzer.getNumberSum(textArea.value);
}


//RESTAURAR MÉTRICAS

const restaurar = document.getElementById("reset-button");
restaurar.addEventListener("click",restaurarMetricas);

function restaurarMetricas(){
  contadorPalabras.innerHTML ='Palabras: '+0;
  contadorCaracteres.innerHTML = 'Caracteres: '+0;
  contadorCaracteresSin.innerHTML ='Caracteres sin espacios: '+0;
  longitudPromedio.innerHTML = 'Longitud promedio: '+0;
  contadorNumeros.innerHTML = 'Números: '+0;
  sumaNumeros.innerHTML = 'Suma de Números: '+0;
  textArea.value = " ";
}


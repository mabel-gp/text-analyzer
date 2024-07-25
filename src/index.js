import analyzer from './analyzer.js';


const textArea = document.querySelector('[name="user-input"]');
const contadorPalabras = document.querySelector('[data-testid="word-count"]');
const contadorCaracteres = document.querySelector('[data-testid="character-count"]');
const contadorCaracteresSin = document.querySelector('[data-testid="character-no-spaces-count"]');
const longitudPromedio = document.querySelector('[data-testid="word-length-average"]');
const contadorNumeros = document.querySelector('[data-testid="number-count"]');
const sumaNumeros = document.querySelector('[data-testid="number-sum"]');


// MÉTRICA| conteo-de-palabras

textArea.addEventListener("input", resultadoContadorPalabras);

function  resultadoContadorPalabras(){
  contadorPalabras.innerHTML = 'Palabras: '+analyzer.getWordCount(textArea.value);
}


// MÉTRICA| conteo-de-caracteres

textArea.addEventListener("input", mostrarContadorCaracteres);

function mostrarContadorCaracteres(){
  contadorCaracteres.innerHTML = 'Caracteres: '+analyzer.getCharacterCount(textArea.value);
}


// MÉTRICA| conteo-de-caracteres-sin-espacios

textArea.addEventListener("input",mostrarContadorCaracteresSin);

function mostrarContadorCaracteresSin(){
  contadorCaracteresSin.innerHTML = 'Caracteres sin espacios: '+analyzer.getCharacterCountExcludingSpaces(textArea.value);
}


// MÉTRICA| longitud-promedio

textArea.addEventListener("input", mostrarLongitudPromedio);

function mostrarLongitudPromedio(){
  longitudPromedio.innerHTML = 'Longitud promedio: '+analyzer.getAverageWordLength(textArea.value);
}


//MÉTRICA| números

textArea.addEventListener("input",mostrarContadorNumeros);

function mostrarContadorNumeros(){
  contadorNumeros.innerHTML = 'Números: '+analyzer.getNumberCount(textArea.value);
}


//MÉTRICA| suma-de-números

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


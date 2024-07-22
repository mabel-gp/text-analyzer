import analyzer from './analyzer.js';

const textArea = document.querySelector('[name="user-input"]');

// Métrica| conteo-de-palabras

const contadorPalabras = document.querySelector('[data-testid="word-count"]');
textArea.addEventListener("input", resultadoContadorPalabras);

function  resultadoContadorPalabras(){
  contadorPalabras.innerHTML = 'Palabras: '+analyzer.getWordCount(textArea.value);
}


// Métrica| conteo-de-caracteres

const contadorCaracteres = document.querySelector('[data-testid="character-count"]');
textArea.addEventListener("input", mostrarContadorCaracteres);

function mostrarContadorCaracteres(){
  contadorCaracteres.innerHTML = 'Caracteres: '+analyzer.getCharacterCount(textArea.value);
}


// Métrica| conteo-de-caracteres-sin-espacios

const contadorCaracteresSin = document.querySelector('[data-testid="character-no-spaces-count"]');
textArea.addEventListener("input",mostrarContadorCaracteresSin);

function mostrarContadorCaracteresSin(){
  contadorCaracteresSin.innerHTML = 'Caracteres sin espacios: '+analyzer.getCharacterCountExcludingSpaces(textArea.value);
}

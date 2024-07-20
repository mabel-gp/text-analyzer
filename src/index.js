import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Métrica| conteo-de-palabras

const contadorPalabras = document.querySelector('[data-testid="word-count"]');
const palabras = document.querySelector('[name="user-input"]');
palabras.addEventListener("input", resultadoContadorPalabras);

function  resultadoContadorPalabras(){
  contadorPalabras.innerHTML = 'Palabras: '+analyzer.getWordCount(palabras.value);
}

// Métrica| conteo-de-caracteres

const contadorCaracteres = document.querySelector('[data-testid="character-count"]');
const caracteres = document.querySelector('[name="user-input"]');
caracteres.addEventListener("input", mostrarContadorCaracteres);

function mostrarContadorCaracteres(){
  contadorCaracteres.innerHTML = 'Caracteres: '+analyzer.getCharacterCount(caracteres.value);
}

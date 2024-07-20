import analyzer from './analyzer.js';
//Incorpora datos desde analyzer.js

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// Métrica| conteo-de-palabras

const result = document.querySelector('[data-testid="word-count"]');
const words = document.querySelector('[name="user-input"]');
words.addEventListener("input", mostrarResultados);

function  mostrarResultados(){
  result.innerHTML = analyzer.getWordCount('Palabras'+words.value);
}

const analyzer = {  

  getWordCount: (text) => {
    return text.trim().split(' ').length;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const caracteresSinEsp = text.replace(/[^0-9a-zA-Z]/g,'');
    if (caracteresSinEsp){
      return caracteresSinEsp.length;
    }else{
      return 0;
    }
  },

  getAverageWordLength: (text) => { 
    const totalCaracteres = text.replace(/[^a-zA-Z.,]/g,'').length;
    const cantidadPalabras = text.trim().split(' ').length;
    const longitudPromedio = totalCaracteres/cantidadPalabras;
    return parseFloat(longitudPromedio.toFixed(2));
  },

  getNumberCount: (text) => {
    const numeros = text.match(/\b[\d.]+\b/g);
    if (numeros){
      return numeros.length;
    }else{
      return 0;
    }
  },
 
  getNumberSum: (text) => {
    const soloNumeros = text.match(/\b[\d.]+\b/g);
    let suma = 0;

    if (soloNumeros){
      for( let i=0; i<soloNumeros.length; i++){
        suma = suma + parseFloat(soloNumeros[i]);
      }
    }
    return suma;

    // if(soloNumeros === null){
    //   return suma;
    // }

    // for(const i of soloNumeros){
    //   suma = suma + parseFloat(i);
    // }
    // return suma;
  },
};

export default analyzer;

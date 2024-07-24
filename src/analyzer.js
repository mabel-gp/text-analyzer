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
    return text; //EN CONSTRUCCIÓN
  },

  getNumberSum: (text) => {
    return text; //EN CONSTRUCCIÓN
  },
};

export default analyzer;

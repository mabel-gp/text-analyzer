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
  
  },

  getNumberCount: (text) => {

  },

  getNumberSum: (text) => {
    
  },
};

export default analyzer;

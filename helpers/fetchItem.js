const fetchItem = async (itemId) => {
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  try {
    if (itemId === undefined) { throw Error('You must provide an url'); } else {
      const promise = await fetch(url);
      const dataBase = await promise.json();  
      return dataBase; 
    }
    } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

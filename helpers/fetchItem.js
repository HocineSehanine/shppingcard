const fetchItem = async (itemId) => {
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  try {
    const promise = await fetch(url);
    const dataBase = await promise.json();
    if (itemId !== undefined) { return dataBase; }

    if (itemId === undefined) { throw Error('You must provide an url'); }
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

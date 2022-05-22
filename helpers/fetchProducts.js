const fetchProducts = async (productType) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productType}`;
  try {
    const firstPromise = await fetch(url);
    const secondPromise = await firstPromise.json();
    const data = secondPromise;
    if (productType !== undefined) { return data; }

    if (productType === undefined) { throw Error('You must provide an url'); }
  } catch (error) {
    if (productType === undefined) {
         return error;
      }
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

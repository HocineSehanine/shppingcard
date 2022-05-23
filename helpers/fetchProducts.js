const fetchProducts = async (productType) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productType}`;
        try {
            if (productType === undefined) { throw Error('You must provide an url'); } else {
              const firstPromise = await fetch(url);
              const secondPromise = await firstPromise.json();
              const data = secondPromise;
              return data;
            }
      } catch (error) {
         return error;
      }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

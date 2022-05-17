const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  try {
    const firstPromise = await fetch(url);
    const secondPromise = await firstPromise.json();
    const data = secondPromise.results;
    return data;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

const getSavedCartItems = (myCarrinho, myPrice) => {
  myCarrinho = localStorage.getItem('carrinho');
  myPrice = localStorage.getItem('preço');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

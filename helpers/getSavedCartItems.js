const getSavedCartItems = () => {
  document.querySelector('.cart__items').innerHTML = localStorage.getItem('carrinho');
  document.querySelector('.cart__items').innerHTML = localStorage.getItem('preço');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

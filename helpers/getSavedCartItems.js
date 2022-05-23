const getSavedCartItems = () => {
  document.querySelector('.cart__items').innerHTML = localStorage.getItem('carrinho');
  document.querySelector('.total-price').innerHTML = localStorage.getItem('preço');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

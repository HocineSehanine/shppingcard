const getSavedCartItems = () => {
  document.querySelector('.cart__items').innerHTML = localStorage.getItem('carrinho');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

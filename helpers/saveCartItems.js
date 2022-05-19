const saveCartItems = () => {
  localStorage.clear();
  const meuCarrinho = document.querySelector('.cart__items').innerHTML;
  localStorage.setItem('carrinho', meuCarrinho);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

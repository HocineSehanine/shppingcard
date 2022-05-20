const saveCartItems = () => {
  localStorage.clear();
  const meuCarrinho = document.querySelector('.cart__items').innerHTML;
  const totalPrice = document.querySelector('.total-price').innerHTML;
  localStorage.setItem('carrinho', meuCarrinho);
  localStorage.setItem('preço', totalPrice);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

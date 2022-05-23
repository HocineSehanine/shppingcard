const saveCartItems = (carrinho, precoTotal) => {
  localStorage.setItem('carrinho', carrinho);
  localStorage.setItem('preço', precoTotal);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

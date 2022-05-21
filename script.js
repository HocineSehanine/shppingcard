const carrinho = document.querySelector('.cart__items');
const totalPrice = async () => {
  const somaTudo = async () => {
    const arr = [];
    carrinho.childNodes.forEach((i) => arr.push(parseFloat(i.innerHTML.split('PRICE: $')[1])));
    const total = await arr.reduce((a, b) => { let p = a; p += b; return p; }, 0);
    return total;
  };
  const total = await somaTudo();
  document.querySelector('.total-price').innerText = `${total}`;
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
function cartItemClickListener(event) {
  event.target.remove();
  totalPrice();
  saveCartItems();
}
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addItem = async (event) => {
  const item = await event.target.parentElement;
  const id = await getSkuFromProductItem(item);
  const i = await fetchItem(id);
  console.log(i);
  carrinho.appendChild(createCartItemElement({ sku: i.id, name: i.title, salePrice: i.price }));
  totalPrice();
  saveCartItems();
};

const products = async () => {
  const produtos = await fetchProducts();
  produtos.forEach((c) => {
    const productObj = { sku: c.id, name: c.title, image: c.thumbnail };
    const i = document.querySelector('.items');
    i.appendChild(createProductItemElement(productObj));
  });
    const allItems = document.getElementsByClassName('items')[0].children;
    const all = Object.entries(allItems);
    all.forEach((l) => {
      const btn = l[1].querySelector('button');
      btn.addEventListener('click', addItem);
    });
  };
  products();
  
  const emptyFunc = () => {
    const cartItems = document.getElementsByClassName('cart__item');
    const cart = Object.entries(cartItems);
    cart.forEach((cI) => {
      cI[1].remove();
    });
    localStorage.clear();
  };
  const empty = document.getElementsByClassName('empty-cart')[0];
  empty.addEventListener('click', emptyFunc);
  
  window.onload = () => { 
    getSavedCartItems();
    const meuCarrinho = carrinho.children;
    const all = Object.entries(meuCarrinho);
    all.forEach((l) => {
      const btn = l[1];
      btn.addEventListener('click', cartItemClickListener);
    });
  };
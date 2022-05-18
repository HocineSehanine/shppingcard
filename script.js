const totalPrice = async () => {
  const somaTudo = () => {
    const q = [];
    const r = document.querySelector('.cart__items');
    const ar = r.childNodes;
    ar.forEach((i) => q.push(parseFloat(i.innerHTML.split('PRICE: $')[1])));
    const total = q.reduce((a, b) => { let p = a; p += b; return p; }, 0);
    return total;
  };
  document.querySelector('.total-price').innerText = `Subtotal: R$ ${somaTudo()}`;
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
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const items = async (itemId) => {
  const i = await fetchItem(itemId);
  const addedOl = await document.getElementsByClassName('cart__items')[0];
  addedOl.appendChild(createCartItemElement({ sku: i.id, name: i.title, salePrice: i.price }));
  await totalPrice();
};
function addItem(event) {
  const item = event.target.parentElement;
  const id = getSkuFromProductItem(item);
  items(id);
}
const products = async () => {
  const produtos = await fetchProducts();
  const productsArray = Object.entries(produtos);
  const dataBase = [];
  productsArray.forEach((e) => dataBase.push(e[1]));
  dataBase.forEach((c) => {
    const i = document.getElementsByClassName('items')[0];
    i.appendChild(createProductItemElement({ sku: c.id, name: c.title, image: c.thumbnail }));
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
  document.querySelector('.total-price').innerText = 'Subtotal: R$ 0,00';
  const cartItems = document.getElementsByClassName('cart__item');
  const cart = Object.entries(cartItems);
  cart.forEach((cI) => {
    cI[1].remove();
  });
};
const empty = document.getElementsByClassName('empty-cart')[0];
empty.addEventListener('click', emptyFunc);

window.onload = () => { };
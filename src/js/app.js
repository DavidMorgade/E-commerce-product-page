'use strict';

////////////////  DOM CONTENT LOADED /////////////////
document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

////////////////// initapp//////////////////////////
function initApp() {
  changeImg();
  inputNumber();
  showCart();
  showModalImg();
  closeModal();
  phoneMenu();
  manipulateCart();
  swiperApi();
}

////////////////// FUNCTIONS /////////////////
const changeImg = function () {
  const thumbsImg = document
    .querySelector('.main__thumbs')
    .querySelectorAll('img');
  const thumbsCont = document.querySelector('.main__thumbs');
  thumbsCont.addEventListener('click', function (e) {
    const clicked = e.target.closest('img');
    if (!clicked) return;
    thumbsImg.forEach(img => (img.style.opacity = 1));
    clicked.style.opacity = 0.2;
  });
  thumbsImg.forEach((img, i) => {
    const productImg = document.querySelector('.main__productimg');
    img.addEventListener('click', function () {
      productImg.src = `build/img/image-product-${i + 1}.jpg`;
    });
  });
};

///////////////// increase number input fuction///////////////
let value = 0;
const inputNumber = function () {
  const [minusInput, plusInput] =
    document.querySelectorAll('.main__input--icon');
  minusInput.addEventListener('click', function () {
    if (value > 0) value--;
    document.querySelector('.main__input--number').textContent = value;
  });
  plusInput.addEventListener('click', function () {
    value++;
    document.querySelector('.main__input--number').textContent = value;
  });
};
/////////////// show shopping cart function ////////////////////
const showCart = function () {
  const shoppingCart = document.querySelector('#shop-cart');
  const showModal = document.querySelector('.main__modal');
  shoppingCart.addEventListener('click', function () {
    showModal.classList.toggle('hidden');
  });
};
///////////////// Modal Window /////////////////////////
const showModalImg = function () {
  if (window.innerWidth >= 768) {
    /// open modal
    const modal = document.querySelector('.modal');
    if (innerWidth < 768) {
      modal.classList.add('hidden');
    }
    const productImg = document.querySelector('.main__productimg');
    productImg.addEventListener('click', function () {
      modal.classList.toggle('hidden');
      document.body.style.overflow =
        document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    });
  }
};
const closeModal = function () {
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close');
  closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    document.body.style.overflow =
      document.body.style.overflow == 'hidden' ? 'auto' : 'hidden';
  });
};
///// Lateral menu for phone
const phoneMenu = function () {
  const menu = document.querySelector('.mobile');
  const open = document.querySelector('#header__menu');
  const close = document.querySelector('.mobile__close');
  open.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
  close.addEventListener('click', function () {
    menu.classList.toggle('hidden');
  });
};
///////////// Manipulate Cart //////////////
const manipulateCart = function () {
  const bin = document.querySelector('.main__modal--trash');
  const emptyCart = document.querySelector('.main__modal--empty');
  const itemsCart = document.querySelector('.main__modal--item');
  const cartBtn = document.querySelector('.main__btn');
  const itemsSelected = document.querySelector('.main__input--number');
  const totalItems = document.querySelector('.total__items');
  const prize = document.querySelector('.prize');
  const money = document.querySelector('.total__pay');
  const cart = document.querySelector('.main__modal');
  const cartIcon = document.querySelector('.items');
  cartBtn.addEventListener('click', function () {
    if (+itemsSelected.textContent === 0) return;
    itemsCart.classList.remove('hidden');
    emptyCart.classList.add('hidden');
    cartIcon.classList.remove('hidden');
    totalItems.textContent =
      Number(totalItems.textContent) + Number(itemsSelected.textContent);
    itemsSelected.textContent = 0;
    value = 0;
    money.textContent = prize.textContent * totalItems.textContent;
    document.querySelector('.notification').classList.remove('hidden');
    const timeOut = setTimeout(stopCart, 2000);
    cartIcon.textContent = String(totalItems.textContent);
    function stopCart() {
      document.querySelector('.notification').classList.add('hidden');
    }
  });
  bin.addEventListener('click', function () {
    totalItems.textContent = 0;
    money.textContent = 0;
    cartIcon.textContent = 0;
    itemsCart.classList.add('hidden');
    emptyCart.classList.remove('hidden');
    cartIcon.classList.add('hidden');
  });
};
//////////// Swiper api /////////////////////////
const swiperApi = function () {
  /// Swiper arrow colors
  document.documentElement.style.setProperty('--swiper-theme-color', '#FFF');
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },
    effect: 'flip',
    grabCursor: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
};
/////////////////////// Swiper for modal /////////////////////////



$(function() {
	$('#fv-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

// opening shopping card
const card = document.querySelector('#cart');
const cardInfo = document.querySelector('#shopping-card');
const btnClose = document.querySelector('#btn-close');

card.addEventListener('click', () => {
    cardInfo.classList.add('open')
    document.body.style.overflow = 'hidden'
} )

cardInfo.addEventListener('click', (event) => {
    if(event.target.nodeName === 'A') {
        cardInfo.classList.remove('open');
        document.body.style.overflow = 'visible'
      }
})

btnClose.addEventListener('click', () => {
    cardInfo.classList.remove('open');
    document.body.style.overflow = 'visible'
});

// библиотека перехода страниц
/*
barba.init({
    views: [{
      namespace: 'homepage',
      beforeLeave(data) {
        opacity: 0
      }
    }, {
      namespace: 'menu',
      beforeEnter(data) {
        // do something before entering the `contact` namespace
        opacity: 0
      }
    }]
  });
*/
const formElSubmit = document.querySelector('.shopping-card');
const nameEl = document.querySelector('[name="name"]');
const telEl = document.querySelector('[name="tel"]');
const streetEl = document.querySelector('[name="street"]');
const houseEl = document.querySelector('[name="house"]');
const apartmentEl = document.querySelector('[name="apartment"]');
const entryEl = document.querySelector('[name="entry"]');
const floorEl = document.querySelector('[name="floor"]');
const btnSubmit = document.querySelector('[type="submit"]');

nameEl.addEventListener('input', inputCheckNum);
telEl.addEventListener('input', inputCheckLetter);
streetEl.addEventListener('input', inputCheckNum);
houseEl.addEventListener('input', inputCheckLetter);
apartmentEl.addEventListener('input', inputCheckLetter);
entryEl.addEventListener('input', inputCheckLetter);
floorEl.addEventListener('input', inputCheckLetter);

formElSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  event.currentTarget.style.reset()
})

function inputCheckNum (event) {
  event.target.style.borderColor = 'green'
  event.target.style.backgroundColor = '#FFFFFF'
  if(event.target.value.match(/\d/g)) {
    event.target.style.borderColor = 'red';
    event.target.style.backgroundColor = 'red'
  }
};

function inputCheckLetter(event) {
  event.target.style.backgroundColor = '#FFFFFF'
  event.target.style.borderColor = 'green'
  if(event.target.value.match(/\D/g)) {
    event.target.style.borderColor = 'red';
    event.target.style.backgroundColor = 'red'
  }
};

btnSubmit.addEventListener('click', () => {
  window.location.href='ordered.html'
})

// ================================================ //

const burgerEl = document.querySelector('.header__nav-menu');
const btnBurger = document.querySelector('#burger');

btnBurger.addEventListener('click', () => {
  burgerEl.classList.toggle('open')

})
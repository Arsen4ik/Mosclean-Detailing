document.querySelector('#app').innerHTML = `
<div class="side-bar">
<img class="close-side-bar" src="./assets/close-svgrepo-com.svg" alt="">
<a href="#about" class="navbar-link side-bar-navbar-link">о нас</a>
<a href="#options" class="navbar-link side-bar-navbar-link">наши услуги</a>
<a href="#prices" class="navbar-link side-bar-navbar-link">цены</a>
<a href="#reviews" class="navbar-link side-bar-navbar-link">отзывы</a>
<a href="#contacts" class="navbar-link side-bar-navbar-link">контакты</a>
</div>
<nav class="navbar">
<a href="#banner" class="navbar-brand">
  <div class="header-logo"></div>
  <p class="header-name">mosclean detailing</p>
</a>
<ul class="navbar-links">
  <li><a href="#about" class="navbar-link">о нас</a></li>
  <li><a href="#options" class="navbar-link">наши услуги</a></li>
  <li><a href="#prices" class="navbar-link">цены</a></li>
  <li><a href="#reviews" class="navbar-link">отзывы</a></li>
  <li><a href="#contacts" class="navbar-link">контакты</a></li>
</ul>
<img class="navbar-menu" src="./assets/menu-list-1527-svgrepo-com.svg" alt="">
</nav>
<section class="banner-section" id="banner">
<div class="banner-div">
  <div class="company">
    <img src="./assets/main-banner-picture.png" class="company-main-banner-picture" alt="">
    <p class="company-p1">DETAILING</p>
    <a class="company-a-p2" href="#contacts">
      <p class="company-p2">СВЯЖИТЕСЬ С НАМИ</p>
    </a>
  </div>
</div>
</section>

<section class="about" id="about">
<h1 class="about-p1 zaglav">О mosclean detailing</h1>
<p class="about-p2">Мы предлагаем комплексные услуги по улучшению внешнего вида автомобиля и его защите.
  У нас большой опыт в сфере детейлинг-услуг, индивидуальный подход к каждому клиенту,
  проводят работу быстро и качественно, с полным соблюдением рекомендованной технологии.
  Мы сэкономим Ваше время и деньги при обращении к нам за услугами исправления повреждений кузова автомобиля,
  сделаем максимум для получения желаемого результата. Заявки принимаем по телефону или в социальных сетях.
  Работаем без выходных. У нас:</p>
<ul class="about-p2">
  <li>Специализированное оборудование</li>
  <li>Опытные мастера</li>
  <li>Качественные материалы</li>
  <li>Комплексное предоставление услуг, гарантия</li>
</ul>
</section>

<div class="cInnerContent">
<h1 class="zaglav" id="options">Услуги которые мы предоставляем:</h1>

<div class="feature feature-reversed">
  <div class="featured-image-container">
    <div class="card" id="card">
      <img width="579" class="card-img" src="./assets/option1-pictures/img1-0.png" alt="">
      <p class="card-p">наведите/нажмите чтобы увидеть результат</p>
    </div>
  </div>

  <div class=" card-text-end">
    <h2 class="heading_large option-main-text">ВМЯТИНЫ</h2>
    <p class="option-text">Все что Вам нужно знать об этой услуге, вы уже прочитали в названии,
      главное условие удаления вмятин без покраски, отсутствие сколов и трещин на ЛКП,
      но и в таких случаях при согласовании с клиентами мы проводим работы.</p>
  </div>
</div>

<div class="feature">
  <div class="card-text-start">
    <h2 class="heading_large card-before" id="card-before">ЦАРАПИНЫ</h2>
    <p class="option-text">Удаление царапин- услуга позволяющая удалить глубокие и объёмные царапины,
      используя специальные материалы для сохранения заводского окраса детали.</p>
  </div>

  <div class="featured-image-container">
    <div class="card" id="card">
      <img width="579" src="./assets/option2-pictures/img5-0.png" class="card-img" alt="">
      <p class="card-p card-p-end">наведите/нажмите чтобы увидеть результат</p>
    </div>
  </div>
</div>

<div class="feature feature-reversed">
  <div class="featured-image-container">
    <div class="card">
      <img width="579" src="./assets/option3-pictures/img.jpg" class="card-img" alt="">
    </div>
  </div>

  <div class="card-text-end">
    <h2 class="heading_large card-before" id="card-before">ПОЛИРОВКА</h2>
    <p class="option-text">Восстановительная полировка предназначена для восстановления эстетических
      характеристик кузова авто
      — она устраняет мелкие царапины, потёртости, трещины, следы от птичьего помета и почек деревьев,
      возвращает лакокрасочному покрытию блеск и гладкость. Преимуществ у услуги множество
      — с помощью нее автомобилю можно вернуть «вторую жизнь», чтобы наслаждаться визуальным
      эффектом или выгодно продать в будущем.</p>
  </div>
</div>

<div class="feature">
  <div class="card-text-start">
    <h2 class="heading_large">ПОКРЫТИЯ</h2>
    <ul class="option-text">
      <li>Уменьшает загрязнение ЛКП и упращает ее очистку</li>
      <li>Защищает краску от выгорания и сохраняет естественный цвет</li>
      <li>Уменьшает вероятность возникновения сколов</li>
      <li>Уменьшает риск образования и развития коррозии</li>
      <li>Снижает риск повреждения ЛКП на мойках с низким качеством химии и низким уровнем подготовки мойщиков</li>
      <li>Создает эффект антиграфити</li>
      <li>Усиливает блеск, глубину и насыщенность цвета ЛКП</li>
    </ul>
  </div>

  <div class="featured-image-container">
    <div class="card">
      <img width="579" src="./assets/car.jpg" class="card-img" alt="">
    </div>
  </div>
</div>

</div>

</div>
<section class="prices">
<h1 class="zaglav" id="prices">Прайс-лист на ремонт кузова автомобиля</h1>

<h2 class="zaglav zaglav2">Механическая полировка кузова автомобиля</h2>
<div class="price">
  <p class="name-price">Восстановительная полировка</p>
  <p class="num-price">от 4 000 до 14 000 руб.</p>
</div>
<div class="price">
  <p class="name-price">Удаление мелких царапин на одной детали</p>
  <p class="num-price">от 500 руб.</p>
</div>
<div class="price">
  <p class="name-price">Полировка фар</p>
  <p class="num-price">от 500 руб. за 1 шт</p>
</div>
<div class="price">
  <p class="name-price">Полимерное покрытие</p>
  <p class="num-price">от 2 000 руб</p>
</div>
<div class="price">
  <p class="name-price">Жидкое стекло</p>
  <p class="num-price">от 5 000 до 8 000 руб.</p>
</div>
<div class="price">
  <p class="name-price">Керамическое покрытие</p>
  <p class="num-price">от 22 000 до 35 000 руб.</p>
</div>

<h2 class="zaglav zaglav2">Удаление вмятин без дальнейшей покраски</h2>

<div class="price">
  <p class="name-price">Вмятины с размером до 3 см</p>
  <p class="num-price">от 1 000 до 2 500 руб.</p>
</div>
<div class="price">
  <p class="name-price">Вмятины с размером от 3 см. до 10 см.</p>
  <p class="num-price">от 2 000 до 5 500 руб.</p>
</div>
<div class="price">
  <p class="name-price">Вмятины с размером до 3 см</p>
  <p class="num-price">от 1 500 до 4 000 руб.</p>
</div>
<div class="price">
  <p class="name-price">Вмятины с размером от 3 см. до 10 см.</p>
  <p class="num-price">от 2 000 до 7 000 руб.</p>
</div>
<div class="price">
  <p class="name-price">Вмятины с размером от 10 см. до 30 см.</p>
  <p class="num-price">от 4 500 до 11 000 руб.</p>
</div>

<h2 class="zaglav zaglav2">Удаление сколов и царапин методом локальной покраски</h2>

<div class="price">
  <p class="name-price">Устранение сколов методом локальной покраски (финальная цена согласовывается в каждом
    случае)</p>
  <p class="num-price">от 4 000 руб.</p>
</div>
</section>
<!-- яндекс вставка по отзывам -->
<h1 class="zaglav reviews-h1" id="reviews">Отзывы</h1>
<div class="reviews">
<iframe class="block1" src="https://yandex.ru/maps-reviews-widget/210486850174?comments"></iframe>
<a class="block2" href="https://yandex.ru/maps/org/mosclean/210486850174/" target="_blank"></a>

</div>
<!-- ---- -->

<footer class="pa4 pa5-l black-70 bt b--black-10" id="contacts">
<div class=" cf">
  <h1 class="fl w-100 pv0 f6 fw6 ttu tracked mb4 footer-name-company">mosclean detailing</h1>
  <article class="fl w-50 dib-ns w-auto-ns mr4-m mr5-l  pr2 pr0-ns ">
    <h4 class="f5 f4-l fw6 footer-menu-company">Автозоводская улица, 18</h4>
    <span class="f7 f6-l db black-70 footer-menu-company">Метро, МЦК - ст. Автозоводская</span>
    <span class="f7 f6-l black-70 footer-menu-company">наш сервис распологается в тц "Ривьера" на минус 2
      этаже</span>
    <a class="db fw6 pv3 black-70 link dim footer-phone" title="Call SF" href="tel:+74992777066">
      <!-- +7(917)515-55-15 -->
      +7(499)277-70-66
    </a>
  </article>
</div>
<section class="cf footer-mail">
  <div class=" mb0-ns w-100 w-50-l fr">
    <a class="black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 footer-email" href="mailto:mosclean-detailing@yandex.ru"
      target="_blank">
      mosclean-detailing@yandex.ru
    </a>
  </div>
</section>
<div class="paint-links">
  <a href="https://instagram.com/mosclean_detailing?igshid=YmMyMTA2M2Y=" target="_blank"
    class="paint-links-a paint-links-a1"><img src="./assets/instagram-svgrepo-com.svg" alt=""
      class="paint-links-a-img"></a>
  <a href="tel:+74992777066" class="paint-links-a paint-links-a2"><img src="./assets/phone-svgrepo-com.svg" alt=""
      class="paint-links-a-img"></a>
  <a href="https://youtube.com/@MOSCLEAN-DETAILING" target="_blank" class="paint-links-a paint-links-a3"><img
      src="./assets/youtube-168-svgrepo-com.svg" alt="" class="paint-links-a-img"></a>
  <a href="mailto:mosclean-detailing@yandex.ru" target="_blank" class="paint-links-a paint-links-a4"><img
      src="./assets/email-alt-svgrepo-com.svg" alt="" class="paint-links-a-img"></a>
</div>
<div class="db dn-ns">
  <p class="f7 black-70 mt4 tc">
    Copyright © mosclean detailing <span class="footer-year"></span>
  </p>
</div>
</footer>
`


let navbarMenu = document.querySelector('.navbar-menu')
let sideBar = document.querySelector('.side-bar')
let closeSideBar = document.querySelector('.close-side-bar')

let isNavbarMenu = false
navbarMenu.addEventListener('click', () => {
  if (!isNavbarMenu) {
    sideBar.style.right = 0
    isNavbarMenu = true
  } else {
    sideBar.style.right = '-200px'
    isNavbarMenu = false
  }
})
closeSideBar.addEventListener('click', () => {
  sideBar.style.right = '-200px'
  isNavbarMenu = false
})


let cardsArr = []

let cards = document.querySelectorAll('#card')
cards.forEach(el => {

  el.sign = 0
  el.addEventListener('mouseenter', () => {
    let srcImg = el.firstChild.nextSibling.src
    let srcImgArr = []
    for (let i = 0; i < srcImg.length; i++) {
      srcImgArr.push(srcImg[i])
    }
    if (!el.sign) {
      el.sign = 1
      srcImgArr[srcImgArr.length - 5] = el.sign
      el.style.transform = "rotateY(180deg)"
      setTimeout(() => {
        el.firstChild.nextSibling.src = srcImgArr.join('')
        el.firstChild.nextSibling.style.transform = "rotateY(180deg)"
        el.lastChild.previousSibling.style.transform = "rotateY(180deg)"
      }, 250)
    } else {
      el.sign = 0
      srcImgArr[srcImgArr.length - 5] = el.sign
      el.style.transform = "rotateY(0deg)"
      setTimeout(() => {
        el.firstChild.nextSibling.src = srcImgArr.join('')
        el.firstChild.nextSibling.style.transform = "rotateY(0deg)"
        el.lastChild.previousSibling.style.transform = "rotateY(0deg)"
      }, 250)
    }
  })
  el.addEventListener('click', () => {
    let srcImg = el.firstChild.nextSibling.src
    let srcImgArr = []
    for (let i = 0; i < srcImg.length; i++) {
      srcImgArr.push(srcImg[i])
    }
    if (!el.sign) {
      el.sign = 1
      srcImgArr[srcImgArr.length - 6] = el.sign
      el.style.transform = "rotateY(180deg)"
      setTimeout(() => {
        el.firstChild.nextSibling.src = srcImgArr.join('')
        el.firstChild.nextSibling.style.transform = "rotateY(180deg)"
        el.lastChild.previousSibling.style.transform = "rotateY(180deg)"
      }, 250)
    } else {
      el.sign = 0
      srcImgArr[srcImgArr.length - 6] = el.sign
      el.style.transform = "rotateY(0deg)"
      setTimeout(() => {
        el.firstChild.nextSibling.src = srcImgArr.join('')
        el.firstChild.nextSibling.style.transform = "rotateY(0deg)"
        el.lastChild.previousSibling.style.transform = "rotateY(0deg)"
      }, 250)
    }
  })
})



function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      markers: false,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


let footerYear = document.querySelector('.footer-year')
footerYear.innerHTML = new Date().getFullYear()
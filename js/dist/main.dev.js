"use strict";

var iconMenu = document.querySelector(".menu__icon");
var menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active"); // document.body.classList.toggle('_lock');
  });
}

new Swiper(".banners__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: false
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  }
});
var mySwiper = undefined;

function initSwiper() {
  var screenWidth = $(window).width();

  if (screenWidth > 600 && mySwiper == undefined) {
    mySwiper = new Swiper(".products__slider", {
      // spaceBetween: 0,
      // freeMode: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".news-btn-next",
        prevEl: ".news-btn-prev"
      },
      slidesPerView: 3,
      breakpoints: {
        960: {
          slidesPerView: 3
        },
        600: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 3
        }
      },
      loop: true
    });
  } else if (screenWidth < 599 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
} //Swiper plugin initialization


initSwiper(); //Swiper plugin initialization on window resize

$(window).on("resize", function () {
  initSwiper();
});
var products = [{
  link: "https://www.wona.co.il/product/contour-brush/",
  image: "https://www.wona.co.il/wp-content/uploads/2021/07/0911028-009-660x1024.png",
  title: "FLORMAR - CONTOUR BRUSH",
  price: "49.90"
}, {
  link: "https://www.wona.co.il/product/contour-brush/",
  image: "https://www.wona.co.il/wp-content/uploads/2021/07/47000023-1-660x1024.png",
  title: "FLORMAR - MIDNIGHT MATTE EYELINER BROWN",
  price: "29.50"
}, {
  link: "https://www.wona.co.il/product/contour-brush/",
  image: "https://www.wona.co.il/wp-content/uploads/2021/07/0911028-009-660x1024.png",
  title: "FLORMAR - CONTOUR BRUSH",
  price: "49.90"
}, {
  link: "https://www.wona.co.il/product/contour-brush/",
  image: "https://www.wona.co.il/wp-content/uploads/2021/07/0717035-000-1-660x1024.png",
  title: "FLORMAR - SILK MATTE LIQUID LIPSTICK - NEW",
  price: "72"
}];
var productsSliderBox = document.querySelector(".products__slider-box");
products.forEach(function (element, num) {
  var divProduct = document.createElement("div");
  divProduct.classList.add("products__slider-item");
  divProduct.classList.add("swiper-slide");
  var productImage = "";
  var productLink = "";
  var productPrice = "";

  if (element.image.length > 0) {
    productImage = "<div class=\"product__image\"><img class=\"product__img\" src=\"".concat(element.image, "\" alt=\"image\"></div>");
  }

  if (element.title.length > 0 && element.link.length > 0) {
    productLink = "<a class=\"product__title\" href=\"".concat(element.link, "\">").concat(element.title, "</a>");
  }

  if (element.price.length > 0) {
    productPrice = "<span class=\"product__price\">\u20AA".concat(element.price, "</span>");
  }

  divProduct.innerHTML = "<div class=\"product\">".concat(productImage).concat(productLink, "\n                    <div class=\"product__box\"><span class=\"product__text\">\u05DD\u05D9\u05E2\u05D1\u05E64</span>").concat(productPrice, "\n                    </div><button class=\"product__btn\">\u05E1\u05E7\u05D9\u05E8\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4</button></div>");
  productsSliderBox.append(divProduct);
});
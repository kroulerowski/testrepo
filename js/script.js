// const arrow = document.querySelector("i");
// const btn = document.querySelector(".arrow");
// const photo = document.querySelector(".item1");

// function show() {
//   photo.classList.toggle("show");

//   if (photo.classList.contains("show")) {
//     arrow.style.rotate = "180deg";
//     console.log(`ok`);
//   } else {
//     arrow.style.rotate = "0deg";
//     console.log("nie ok");
//   }
// }
// btn.addEventListener("click", show);

// const sizeUp = document.querySelector(".size-up");
// const sizeDown = document.querySelector(".size-down");
// const color = document.querySelector(".color");
// const p = document.querySelector("p");
// let fontSize = 20

// function bigText(){
//   fontSize+=5
//   p.style.fontSize = fontSize + 'px'
// }

// sizeUp.addEventListener('click', bigText)

// function smallText(){
//   fontSize-=5
//   p.style.fontSize = fontSize + 'px'
// }

// sizeDown.addEventListener('click', smallText)

// function colorChange(){
//   p.style.color = 'gold'
// }
// color.addEventListener('click', colorChange)

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll('.nav-link')
  const navList = document.querySelector('.navbar-collapse')
  function addShadow() {
    if (window.scrollY >= 200) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach(item => item.addEventListener('click', () => {
    navList.classList.remove('show')
  }))
  window.addEventListener("scroll", addShadow);
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


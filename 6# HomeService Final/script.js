document.querySelector(".menu-hamburguesa").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("cambio");
});

/* Progreso barras */

const secciones = document.querySelectorAll("seccion");
const progreso = document.querySelector(".progreso-barras-contenedor");
const progresoBarraPorcentajes = [97, 89, 85, 87, 80, 70];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset + window.innerHeight >= progreso.offsetTop) {
    document.querySelectorAll(".progreso-percentaje").forEach((el, i) => {
      el.style.width = `${progresoBarraPorcentajes[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progresoBarraPorcentajes[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});

/* 3 */

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});


/* Pricing */


const swiper = new Swiper('.mySwiper', {
  // centeredSlides: true,
// 
  effect: 'cards',
  // // effect: 'cards',
  // direction: 'horizontal',

  // spaceBetween: 30,
  // freeMode: true,
  grabCursor: true,
  // // centeredSlides: true,
  // slidesPerView: 'auto',
  // coverflow: {
  //   rotate: true,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // }
});

/* Imagenes slider */

const fondos = ["/images/Albañil.jpg", "/images/carpintero.jpg", "/images/cerrajero.jpg", "images/Decoración.webp", "/images/electricista 3.jpg", "/images/jardinero.jpg", "/images/seguridad.jpg", "/images/soldadura.jpg"]

const btn = document.querySelector('.btn');

let i = 0
setInterval((e) => {
  if (i < fondos.length - 1) {
      i++
      console.log(i);
  } else {
    i = 0
  }
    document.querySelector('#bannerImg').src=fondos[i];
}, 7000);



let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};


let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
  themeToggler.classList.toggle('fa-sun');
  if(themeToggler.classList.contains('fa-sun')){
    document.querySelector('body').classList.add('active');
    themeToggler.classList.remove('fa-moon');
  }else{
    document.querySelector('body').classList.remove('active');
    themeToggler.classList.add('fa-moon');
  }
}


var swiper = new Swiper('.product-slider', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    550:{
      slidesPerView:2,

    },
    800:{
      slidesPerView:3,

    },
    1000:{
      slidesPerView:3,

    }
  },
});
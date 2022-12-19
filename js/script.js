let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () =>{
      faqBox.parentElement.classList.toggle('active');
   }
});

var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});


//Google map 
let map;
const csun = { lat: 34.23833238 , lng: -118.523664572 };
const csunlib = { lat: 34.240029 , lng: -118.529499 }
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: csun,
    zoom: 15,
    mapId: "490687d5666a03fe",
  });

  const marker = new google.maps.Marker({
    position: csunlib,
    label: "Res",
    map: map,
  });
}
window.initMap = initMap;


//Email Send From Contact Field
function sendMail(){
   var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
   };
   const serviceID = "service_xgiyey8";
   const templateID = "template_srzg2zq";

   emailjs.send(serviceID, templateID, params).then(function (res){
      alert("Email Sent!");
   })
}


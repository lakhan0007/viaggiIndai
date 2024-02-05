
// <------------------------- FAG Toggle ---------------------------->

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentElement.classList.toggle("active");
  });
});

// <------------------------- FAG Toggle ---------------------------->


// <------------------------- Gallery Section ---------------------------->

function showImage(imageId) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");

  modalImg.src = "assets/images/" + imageId;
  modal.style.display = "block";

  // Close the modal when clicking outside the image
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// <------------------------- Gallery Section ---------------------------->


// <------------------------- Carousel ---------------------------->

$(document).ready(function(){
  $(".SlickCarousel").slick({
    rtl:false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay:true, 
    autoplaySpeed:5000, //  Slide Delay
    speed:800, // Transition Speed
    slidesToShow:4, // Number Of Carousel
    slidesToScroll:1, // Slide To Move 
    pauseOnHover:false,
    appendArrows:$(".main-contain .Head .Arrows"), // Class For Arrows Buttons
    prevArrow:'<span class="Slick-Prev"></span>',
    nextArrow:'<span class="Slick-Next"></span>',
    easing:"linear",
    responsive:[
      {breakpoint:801,settings:{
        slidesToShow:4,
      }},
      {breakpoint:641,settings:{
        slidesToShow:3,
      }},
      {breakpoint:481,settings:{
        slidesToShow:2,
      }},
    ],
  })
  })

// <------------------------- Carousel Section ---------------------------->


// <------------------------- Header ---------------------------->

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}

// <------------------------- Header ---------------------------->


// <------------------------- Card ---------------------------->

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// <------------------------- Card ---------------------------->


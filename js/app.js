/*=============== TABS ===============*/ 
const tabs = document.querySelectorAll('.tab__btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index)=>{
   tab.addEventListener('click', ()=>{
      tabs.forEach(tab=>{tab.classList.remove('_active')});
      tab.classList.add('_active');

      all_content.forEach(content=>{content.classList.remove('_active')});
      all_content[index].classList.add('_active');
   })
})





// testimonial slider
var swiper = new Swiper(".slide-content", {
   slidesPerView: 3,
   spaceBetween: 25,
   loop: true,
   centerSlide: 'true',
   fade: 'true',
   grabCursor: 'true',
   autoplay: {
      delay: 2000,
   },
   pagination: {
     el: ".swiper-pagination",
     dynamicBullets: true,
     clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   breakpoints:{
      0: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
      1200: {
         slidesPerView: 3,
      },
   },
 });




// Burger menu
$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


// Footer spoller
$(document).ready(function(){
   $('.footer__title').click(function(event) {
      if($('.footer').hasClass('one')){
         $('.footer__title').not($(this)).removeClass('active');
         $('.footer__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true // Animaions repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info,
          .about__container .section__title-1, .about__info,
          .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})





// background ibg class
// function ibg(){
//     let ibg=document.querySelectorAll(".ibg"); 
//   for (var i = 0; i < ibg.length; i++) { 
//     if(ibg[i].querySelector('img')){ 
//       ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
//     } 
//   }
// }
// ibg();


// wrapper
// $('.wrapper').addClass('loaded');
    


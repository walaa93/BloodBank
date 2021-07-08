$('.heading .owl-carousel ').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.article .owl-carousel ').owlCarousel({
  rtl:true,
  loop:true,
  margin:20,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  } 
})

$(function() {
    $( "#datepicker" ).datepicker();
});

// document.querySelector('.fa-chevron-down').addEventListener('click',function(){
//     document.querySelector('.fixed').classList.toggle('active');
//     document.querySelector('.list').classList.toggle('open');
// })
// document.querySelector('.fixed').addEventListener('click',function(){
//     document.querySelector('.list').classList.remove('open');
//     this.classList.remove('active');
    
// })

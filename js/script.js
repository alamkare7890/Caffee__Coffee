/*===========toggle nav===========*/
$(document).ready(function(){
    $('#toggle_id').click(function(){
        $(this).classList.toggle('active');
    })

    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
        enabled:true
        }    
    });
  
})

/*===========Scroll_Top===============
topBtn.oclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    
    })
  

}*/
/*===========slide-navbar-down==============*/
   $(window).scroll(function () {
    $n = $(window).scrollTop();
    if ( $n >= 1) {
        $('#navSocial').addClass('scrollUpNav');
        $('#mainNav').addClass('fixed');
    } else {
        $('#navSocial').removeClass('scrollUpNav');
        $('#mainNav').removeClass('fixed');
    }




})





/*===========Side_Narbar===============*/
/*===========Slider_Space==============*/
/*===========other plugins===============
$(document).ready(function(){
    $(window).scroll(function () {
        $n = $(window).scrollTop();
        if ( $n >= 600) {
            $('#ID').addClass('fixed');
        
        }if ( $n > 1200) {
            $('#ID').addClass('op_fixed');
        
        }else {
            $('#ID').removeClass('oop_fixed').addClass('class_po').removeClass('op_fixed');
        
        }  
       
    });  
        



    $(window).scroll(function() {
		var myscroll = $(window).scrollTop();
		if (myscroll >= 100) {
			$('.mysection').each(function(i) {
				if ($(this).position().top <= myscroll - 0) {
					$('ul li.active').removeClass('active');
					$('ul li').eq(i).addClass('active');
				}
			});

		} else {

			$('ul li.active').removeClass('active');
			$('ul li:first').addClass('active');
		}

		}).scroll();
*/
/**
 * SwiperFamily **/
 var swiper = new Swiper(".banner_slide", {
    grabCursor: true,
        effect: "fade",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, 0],
          },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
    },

 });


 var swiper1 = new Swiper(".gallery_swiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,
    autoHeight: true,

    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        525: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },

 });
 
 var swiper1 = new Swiper(".clients_swiper", {
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4, 
        },
        525: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        },
    },

 }); 
 
 
 var swiper1 = new Swiper(".partner_slide", {
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4, 
        },
        525: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        },
    },

 }); 
 var swiper1 = new Swiper(".gallery_slide", {
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
    slidesPerView: 4,   

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4, 
        },
        525: {
            slidesPerView: 2,
        },
        0:{
            slidesPerView: 1,
        },
    },

 }); 
 /*==============Counter_Up==============*/
 $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
      {
        counter: countTo
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
  });
  
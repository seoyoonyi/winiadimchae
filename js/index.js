//index.js

$(function () {


  $('.main-gnb-wrap>li').mouseover(function () {

    $(this).find('.sub-gnb-wrap').fadeIn(200);
    $(this).siblings().find('.sub-gnb-wrap').fadeOut(200);
  });

  $('nav').mouseleave(function () {
    $(this).find('.sub-gnb-wrap').fadeOut(200);
  });



  var swiper = new Swiper(".slide-view", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var moduleTablist = $('.module-wrap .tab-list>li');
  var popularTablist = $('.popular-wrap .tab-list>li');
  var kitchenTablist = $('.kitchen-wrap .tab-list>li');
  var lifeTablist = $('.life-wrap .tab-list>li');
  var airTablist = $('.air-wrap .tab-list>li');
  var socialTablist = $('.social-wrap .tab-list>li');


  var swiper = new Swiper(".module-wrap", {
    on: {
      slideChange: function () {
        moduleTablist.removeClass('on');
        moduleTablist.eq(this.realIndex).addClass('on');
      }
    }
  });

  var swiper = new Swiper(".popular-wrap", {
    on: {
      slideChange: function () {
        popularTablist.removeClass('on');
        popularTablist.eq(this.realIndex).addClass('on');
      }
    }
  });

  var swiper = new Swiper(".kitchen-wrap", {
    on: {
      slideChange: function () {
        kitchenTablist.removeClass('on');
        kitchenTablist.eq(this.realIndex).addClass('on');
      }
    }
  });

  var swiper = new Swiper(".life-wrap", {
    on: {
      slideChange: function () {
        lifeTablist.removeClass('on');
        lifeTablist.eq(this.realIndex).addClass('on');
      }
    }
  });


  var swiper = new Swiper(".air-wrap", {
    on: {
      slideChange: function () {
        airTablist.removeClass('on');
        airTablist.eq(this.realIndex).addClass('on');
      }
    }
  });

  var swiper = new Swiper(".social-wrap", {
    on: {
      slideChange: function () {
        socialTablist.removeClass('on');
        socialTablist.eq(this.realIndex).addClass('on');
      }
    }
  });





  


});
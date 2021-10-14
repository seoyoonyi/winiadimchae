//index.js

$(function () {
  /* 변수 ********************************************************/
  let mainSlide = {
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
  };




  /* 함수 ********************************************************/
  //섹션 슬라이드 체인지 함수
  function chanSec(sec) {
    var secSwiper = new Swiper(sec, {
      autoHeight: true,
      on: {
        slideChange: function () {
          $(sec + '>.tit-group>ul>li').removeClass('on');
          $(sec + '>.tit-group>ul>li').eq(this.realIndex).addClass('on');
        }
      },
    });

    $(sec + '>.tit-group>ul>li').on('click', function(e){
      e.preventDefault();
      var index = $(this).index();
      secSwiper.slideTo(index);
    });

  };






  /* 이벤트 ********************************************************/
  // 메뉴 호버이벤트
  $('.main-gnb-wrap>li').mouseover(function () {
    $(this).find('.sub-gnb-wrap').fadeIn(200);
    $(this).siblings().find('.sub-gnb-wrap').fadeOut(200);
  });

  $('nav').mouseleave(function () {
    $(this).find('.sub-gnb-wrap').fadeOut(200);
  });

  //슬라이드 이벤트
  var swiper = new Swiper(".slide-view", mainSlide);



  //섹션 슬라이드 이벤트
  chanSec('.module-wrap');
  chanSec('.popular-wrap');
  chanSec('.kitchen-wrap');
  chanSec('.life-wrap');
  chanSec('.air-wrap');
  chanSec('.social-wrap');






}); //index.js
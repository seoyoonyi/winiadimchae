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

    $(sec + '>.tit-group>ul>li').on('click', function (e) {
      e.preventDefault();
      var index = $(this).index();
      secSwiper.slideTo(index);
    });

  };

  function stopScroll() {
    $('html, body').css({
      overflow : 'hidden',
      height : '100%'
    })
    $('body').on('scroll touchmove mousewheel', function(e){
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  };

  function moveScroll(){
    $('html, body').css({
      overflow : 'initial',
      height : 'initial'
    })
    $('body').off('scroll touchmove mousewheel')
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

  //search 아이콘 클릭이벤트-검색창 열기
  $('.search-btn').click(function(){
    $('.search-group').css('display', 'flex');
    $('.etc-group').hide();
    $('.search-group').fadeIn();
    $('.search-bg').show();
    stopScroll();
  });

  //search 아이콘 클릭이벤트-검색창 닫기
  $('.close-btn').click(function(){
    $('.search-group').hide();
    $('.etc-group').show();
    $('.search-bg').fadeOut();
    moveScroll();
  });

  //검색창 clear버튼 클릭이벤트
  $('.search-box').keyup(function(){
    $('.clear-btn').toggle(Boolean($(this).val()));
  });
  $('.clear-btn').toggle(Boolean($('.search-box').val()));
  $('.clear-btn').click(function(){
    $('.search-box').val('').focus();
    $(this).hide();
  });

  //auto 슬라이드 이벤트 - swiper
  var swiper = new Swiper(".slide-view", mainSlide);



  //auto 슬라이드 toggle버튼
  $('.swiper-play-btn').addClass('swiper-stop-btn');
  $('.swiper-play-btn').click(function(){
    if($(this).hasClass('swiper-stop-btn')){
      swiper.autoplay.stop();
      $(this).removeClass('swiper-stop-btn');
      $(this).addClass('swiper-start-btn');
    }else{
      swiper.autoplay.start();
      $(this).removeClass('swiper-start-btn');
      $(this).addClass('swiper-stop-btn');
    }

    });



  //섹션 슬라이드 이벤트
  chanSec('.module-wrap');
  chanSec('.popular-wrap');
  chanSec('.kitchen-wrap');
  chanSec('.life-wrap');
  chanSec('.air-wrap');
  chanSec('.social-wrap');

//소셜위니아 추천레시피 호버이벤트
$('.social-wrap .thumb-box').mouseover(function(){

  $('.social-wrap .main-box').css('display', 'flex');
  let idx = $(this).index();
  $('.social-wrap .main-box').siblings().hide();
  $('.social-wrap .main-box').eq(idx).show();

});




}); //index.js
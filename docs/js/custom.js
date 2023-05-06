// JavaScript Document
$(document).ready(function($) {

  
  //-- Animate in object
  var animobjects = $('.animatedin').length;
  var currobj = 0;
  
  if (animobjects != 0)
  {
    
    $('.animatedin').each(function(){
      var obj = $(this);
      
      setTimeout(function(){
        obj.addClass('in');
        
        setTimeout(function(){
          obj.addClass('stop');
        }, 300)
        
      }, 40 * currobj);
      
      currobj += 1;
    });
  }
  
  //-- Header sizing on scroll
  $(window).on('scroll', function() {
    changeHeader();   
  });

  //-- Change header on scroll
  changeHeader();
  
  function changeHeader()
  {
    if ($(window).scrollTop() > 160)
    {
      $('body').addClass('scrolled');
    }
    else
    {
      $('body').removeClass('scrolled');
    }
  };
  
  
  //-- Mobile menu
  $('.btn-mobilemenu').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('showmenu');
  });

  $('.overlay, .btn-closemenu').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('showmenu');
  });


  //-- Login form selection
  $('.btn-forgotpass').on('click', function(e){
    e.preventDefault();
    $('.form--login').fadeOut(function(){
      $('.form--password').fadeIn();
    })
  });
  
   $('.password-change').on('click', function(e){
    e.preventDefault();
   
      $('.setting-form').slideUp();
 $('.change-pass-form').slideDown();
  });



 $('.add-note-button').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().slideUp();
 
      $('.note-title-end-tags').slideDown();
   
  });

 $('.cancele-note-button').on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().slideUp();
 
      $('.note-description-wrapper').slideDown();
   
  });

 $('.add-tag-icon').on('click', function(e){
    e.preventDefault();
      $('.tags__wrapper').slideToggle();
   
  });

 $('.delete-tag').on('click', function(e){
    e.preventDefault();
      $(this).parent().hide();
   
  });



  $('.btn-backtologin').on('click', function(e){
    e.preventDefault();
    $('.form--password').fadeOut(function(){
      $('.form--login').fadeIn();
    })
  });
  
  $('.btn-gotologin').on('click', function(e){
    e.preventDefault();
    $('.form--signup').fadeOut(function(){
      $('.form--login').fadeOut();
    })
  });
  
  $('.prompt__close').on('click', function(e){
    $(this).parent().hide();
  });

 $('.btn-gotosignup').on('click', function(e){
    e.preventDefault();
    $('.form--login').fadeOut(function(){
      $('.form--signup').fadeIn();
    })
  });


  $('.modal-window__code-wrapper input').on('input', function(e){
    e.preventDefault();
   $(this).addClass('active');
   
  });
$('.dropdown-menu--filter .dropdown-item').on('click', function(e){
    e.preventDefault();
   $(".dropdown-menu--filter .dropdown-item").removeClass("choosen").eq($(this).index()).addClass("choosen");
   $('.mikeicon-filter').addClass('active');
   
  });
$('.dropdown-menu--filter .dropdown-item--all').on('click', function(e){
    e.preventDefault();
   $('.mikeicon-filter').removeClass('active');
   
  });
$('.list-row__menu--delete').on('click', function(e){
    e.preventDefault();
   $(this).parent().parent().parent().hide();
   
  });

$('.list-links--delete, .linked-item__delete').on('click', function(e){
    e.preventDefault();
   $(this).parent().hide();
   
  });
$('.list-row__menu--clone').on('click', function(e){
    e.preventDefault();

   $(this).parent().parent().parent().clone().appendTo('.list-body')
  });
$('.list-row__menu-btn').on('click', function(e){
    e.preventDefault();
   $(this).parent().toggleClass('active')
  });

$('.list-row__menu-dropdown .list-row__menu-dropdown-item').on('click', function(e){

   $('.list-row__menu').removeClass('active')
  });
$('.members-loader').on('click', function(e){
   $(this).addClass('active');
  });

$('.login-btn').on('click', function(e){
    e.preventDefault();
   $('.modal-window__loader-login').addClass('active');
   
  });
$('.btn--sign-up').on('click', function(e){
    e.preventDefault();
   $('.modal-window__loader-sign-up').addClass('active');
   
  });

$('.delete-goal-item').on('click', function(e){
    e.preventDefault();
   $(this).parent().parent().hide();
   
  });
$('.close-page').on('click', function(e){
    e.preventDefault();
   $(this).parent().hide();
   
  });

// $('.btn-browse').on('click', function(e){
//     e.preventDefault();
//    $(this).parent().hide();
   
//   });


jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".list-row__menu");    
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div.removeClass('active');
    }
  });
});

$('.modal-window__content .close, .modal-window__past-code .btn:last-child, .btn-close').click(function(){
        $('.modal-window').removeClass('active');
    })

  $('.btn-primary--last').on('click', function(e){
    e.preventDefault();
    $('.modal-window').addClass('active');
  });

  $('.edit-balance').on('click', function(e){
    e.preventDefault();
    $('.modal-window').addClass('active');
  });

    $('.edit-finance-item').on('click', function(e){
    e.preventDefault();
    $('.budget-modal--edit').addClass('active');
  });

     $('.btn-new-budget').on('click', function(e){
    e.preventDefault();
    $('.new-budget-modal').addClass('active');
  });




     $('.budget-modal .close').on('click', function(e){
    e.preventDefault();
    $('.budget-modal').removeClass('active');
  });

// $('.event-tab__no').on('click', function(e){
//     e.preventDefault();
//     $(this).addClass('active');
//     $(this).removeClass('no-active');
//     $(this).parent().find('.event-tab__yes').addClass('no-active');
  

//   })
// $('.event-tab__yes').on('click', function(e){
//     e.preventDefault();
//     $(this).addClass('active');
//     $(this).removeClass('no-active');
//     $(this).parent().find('.event-tab__no').addClass('no-active');

//   })


 $('.add-notes').on('click', function(e){
    e.preventDefault();
    $('.notes-list__item--hidden').slideToggle();
  });
$('.add-notes__footer .btn').on('click', function(e){
    e.preventDefault();
    $('.notes-list__item--hidden').slideToggle();
  });
  $('.members__add .bth--transparent').on('click', function(e){
    e.preventDefault();
    $(this).parent().hide();
    $('.members__code').removeClass('hidden');
  });

$('.notes-item__close').on('click', function(e){
    $(this).parent().hide();
  });

$('.valute__empty__item--audio').on('click', function(e){
    $('.record-audio-modal').addClass('active');
  });

$('.record-audio-modal .close').on('click', function(e){
    $('.record-audio-modal').removeClass('active');
  });

   $('.modal-window__past').on('click', function(e){
    e.preventDefault();
    $('.modal-window__past-code').slideToggle();
  });
   $('.modal-window__past-code .btn:first-child').on('click', function(e){
    e.preventDefault();
    $('.modal-window__past-code').slideUp();
  });

 $('.new-income__tabs-wrapper').on('click', function(e){
    e.preventDefault();
    $(".new-income__tab-content").hide().eq($(this).index()).fadeIn()
    //$('.new-income__switch').toggleClass('active');
    $(this).toggleClass('active');
  });

 $('.add-receipt .hide').on('click', function(e){
    $(this).parent().hide();
  });
$('.new-income__btn').on('click', function(e){
    $(this).hide();
    $('.add-receipt--new-income').addClass('active');
    
  });
$('.add-new__photo').on('click', function(e){
    $(this).hide();
    $('.add-receipt--new-income').addClass('active');
    $('.browse-img__title').hide();
    $('.browse-img__content').addClass('active');
  });

$('.add-new-file').on('click', function(e){
    $(this).hide();
    $('.add-receipt--new-income').addClass('active');
    $('.browse-doc__title').hide();
    $('.browse-doc__content').addClass('active');
  });
  //-- Switch button
  $('.btn-group--switchsingle').each(function(){
    var group = $(this),
        btn = group.find('.btn');

    btn.on('click', function(e){
      e.preventDefault();
      btn.removeClass('active');
      $(this).addClass('active');
    });

  });

});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".modal-window__content"); 
    var div2 = $(".modal-window");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".record-audio-modal__content"); 
    var div2 = $(".record-audio-modal");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');
    }
  });
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".budget-modal--edit .budget-modal__content"); 
    var div2 = $(".budget-modal--edit");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.removeClass('active');
    }
  });
});



$(function(){
  $(".event-tab").click(function() {
  $(".event-tab").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");
});


$(function(){
  $(".btn-record").click(function() {
    $(this).toggleClass('active');
    $('.record-audio-modal__text, .record-audio-modal__icon').toggleClass('active');

});  
});
$(function(){
  $(".audio-buttons").click(function() {
    $(this).toggleClass('active');

});  
});
$(function(){
  $(".vault-tab").click(function() {
  $(".vault-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".vault__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});

$(function(){
  $(".event-modal__header-button").click(function() {
  $(".event-modal__header-button").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");
});

$('.tag-item').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
  });
 
$(document).ready(function() {
 $('.popup-link').magnificPopup({
  type: 'image',
   zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out',
    opener: function(openerElement) {
 
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});

});
$(document).ready(function() {
 $('.popup-content-link').magnificPopup({
  type: 'inline',
   zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out',
    opener: function(openerElement) {
 
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});

});

$(document).ready(function() {
 $('.popup-file-link').magnificPopup({
  type: 'iframe',
   zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out',
    opener: function(openerElement) {
 
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});

});

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {    
   $( ".select" ).select2({ 
  theme : "classic" });  
});

$(function(){
  $(".budget__tab").click(function() {
  $(".budget__tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".budget__tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});

$(function(){
  $(".select-format-tab").click(function() {
  $(".select-format-tab").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");
});

$(function(){
  $(".fin-tab").click(function() {
  $(".fin-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".finances__header-tab").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});


  $('.tag-empty').on('click', function (e) {
    inputValue = $("#search").val();
  $(this).removeClass('active');
  $('#tag-list li').show();
$('#tag-list').find('.tag-item:first-child').clone(true).text(inputValue).appendTo("#tag-list");
// $("<li class='tag-item'>new tag</li>").appendTo($("#tag-list"));

});






// $(function(){
//   $(".new-income__tab").click(function() {
//   $(".new-income__tab").removeClass("active").eq($(this).index()).addClass("active");
//   $(".new-income__tab-content").hide().eq($(this).index()).fadeIn()
// }).eq(0).addClass("active");
// });


$(function(){
$(".income-select").select2({
            theme : "classic",
            templateResult: formatState,
            templateSelection: formatState
        });
        function formatState (opt) {
            if (!opt.id) {
                return opt.text;
            }               
            var optimage = $(opt.element).data('image'); 
            if(!optimage){
                return opt.text;
            } else {                    
                var $opt = $(
                    '<span><img src="' + optimage + '" width="23px" /> ' + opt.text + '</span>'
                );
                return $opt;
            }

        };

  });

 $('[data-fancybox]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,

});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});


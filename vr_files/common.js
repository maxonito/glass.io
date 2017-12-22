$(document).ready(function() {

  //fancybox
  $(".fancybox").fancybox();

  $(".s_apps .btn.more").click(function(){
    $(".s_apps .row_hidden").slideToggle();
    $(this).slideToggle();
    return false;
  })

  $(".s_katalog .btn").click(function(){
    var title = $(this).data('title');
    $(".popup#order h2 .title").html("Чтобы заказать "+title);
    $(".popup#order input[name='form']").val("Заказать "+title);
  });

//animated
  var device = $("html").attr("class");
  if(device.indexOf("desktop")!=-1){

    $(".s_howWork li").animated("fadeInLeft", "fadeOut");
    $(".s_apps .item").animated("fadeInUp", "fadeOut");
    $(".s_12ways .col-md-6:nth-child(1) .item").animated("fadeInLeft", "fadeOut");
    $(".s_12ways .col-md-6:nth-child(2) .item").animated("fadeInRight", "fadeOut");
    $(".s_order .left .item").animated("fadeInLeft", "fadeOut");
    $(".s_order .right .item").animated("fadeInRight", "fadeOut");
    $(".s_order .item.item7").animated("fadeIn", "fadeOut");
    $(".s_payment .item.item1").animated("fadeInLeft", "fadeOut");
    $(".s_payment .item.item2").animated("fadeInRight", "fadeOut");
    $(".s_form .wrap").animated("fadeIn", "fadeOut");
    $(".s_comparison .td").animated("fadeInUp", "fadeOut");

    //mask
  //$('input[name=phone]').maskinp('+7 (999) 999-99-99');
  }

  //carousel
 var mobile = true;
  var owl = $(".s_comparison .carousel");


  function carousel(){
    owl.owlCarousel({
      items : 4,
      itemsDesktop:[1199,4],
      itemsDesktopSmall:[979,4],
      itemsTablet :[768,3],
      itemsMobile: [479,2]
    });
  }
  function carousel_mobile(){
    var width = $(window).width();
    if (width>975 && mobile){
     mobile = false;
     owl.data('owlCarousel').destroy();
   }else if (width<975 && !mobile){
    mobile = true;
    carousel();

  }
}

carousel();
carousel_mobile();
$( window ).resize(function() {
  carousel_mobile();
});

  $(".s_reviews .carousel").owlCarousel({
    items : 2,
    autoPlay: 8000,
    stopOnHover: true,
    slideSpeed: 1000,
    itemsDesktop:[1199,2],
    itemsDesktopSmall:[979,1],
    itemsTablet :[768,1],
    itemsMobile: [479,1]
  });
  /*button carousel*/
  $(".next_button").click(function(){
    $(this).parent().find(".carousel").trigger("owl.next");
  });
  $(".prev_button").click(function(){
    $(this).parent().find(".carousel").trigger("owl.prev");
  });
  /*button carousel*/

  

});


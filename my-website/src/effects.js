$(window).scroll(function(){
    $(".about")App.css("opacity", 1 - $(window).scrollTop() / 250);
  });

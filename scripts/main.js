//project thumbs
var thumbs = $(".thumb");
var portfolio = $("#portfolioContainer");
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$( document ).ready(function(){
  thumbs.mouseenter(function(){
    thumbs.css("opacity","0.5");
    $(this).css("opacity", "1");
  });
  portfolio.mouseleave(function(){
    thumbs.css("opacity","1");
  });
  $('.fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('.fadeInRight, .fadeInDown').removeClass('fadeInRight fadeInDown');
  });
});

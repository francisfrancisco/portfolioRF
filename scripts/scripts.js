var pContainerHeight = $('.jumbotron').height();

$(.large-window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /15 +'%)'
    });

  }

  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});

// Nav bar

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// VIDS

var sportsVids = document.getElementById("sportsVids");
var expVids = document.getElementById('expVids');
var commVids = document.getElementById("commVids");
var vid1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var vid4 = document.getElementById("vid4");
var vid5 = document.getElementById("vid5");
var vid6 = document.getElementById("vid6");
var vid7 = document.getElementById("vid7");
var vid8= document.getElementById("vid8");
var vid9 = document.getElementById("vid9");
var vid10 = document.getElementById("vid10");
var vid11 = document.getElementById("vid11");
var vid12 = document.getElementById("vid12");
var vid13 = document.getElementById("vid13");
var vid14 = document.getElementById("vid14");
var vid15 = document.getElementById("vid15");
var vid16 = document.getElementById("vid16");
var vid17 = document.getElementById("vid17");
var vid18 = document.getElementById("vid18");
var vid19 = document.getElementById('vid19');

sportsVids.addEventListener("click", function() {
  vid3.classList.remove("hide");
  vid4.classList.remove("hide");
  vid6.classList.remove("hide");
  vid7.classList.remove("hide");
  vid8.classList.remove("hide");
  vid9.classList.remove("hide");
  vid10.classList.remove("hide");
  vid11.classList.remove("hide");
  vid1.classList.add("hide");
  vid2.classList.add("hide");
  vid5.classList.add("hide");
  vid19.classList.add("hide");
  vid12.classList.add("hide");
  vid13.classList.add("hide");
  vid14.classList.add("hide");
  vid15.classList.add("hide");
  vid16.classList.add("hide");
  vid17.classList.add("hide");
  vid18.classList.add("hide");
});

commVids.addEventListener("click", function() {
  vid1.classList.remove("hide");
  vid2.classList.remove("hide");
  vid5.classList.remove("hide");
  vid19.classList.remove("hide");
  vid3.classList.add("hide");
  vid4.classList.add("hide");
  vid6.classList.add("hide");
  vid7.classList.add("hide");
  vid8.classList.add("hide");
  vid9.classList.add("hide");
  vid10.classList.add("hide");
  vid11.classList.add("hide");
  vid12.classList.add("hide");
  vid13.classList.add("hide");
  vid14.classList.add("hide");
  vid15.classList.add("hide");
  vid16.classList.add("hide");
  vid17.classList.add("hide");
  vid18.classList.add("hide");
});

expVids.addEventListener("click", function() {
  vid12.classList.remove("hide");
  vid13.classList.remove("hide");
  vid14.classList.remove("hide");
  vid15.classList.remove("hide");
  vid16.classList.remove("hide");
  vid17.classList.remove("hide");
  vid18.classList.remove("hide");
  vid3.classList.add("hide");
  vid4.classList.add("hide");
  vid6.classList.add("hide");
  vid7.classList.add("hide");
  vid8.classList.add("hide");
  vid9.classList.add("hide");
  vid10.classList.add("hide");
  vid11.classList.add("hide");
  vid1.classList.add("hide");
  vid2.classList.add("hide");
  vid5.classList.add("hide");
  vid19.classList.add("hide");
});

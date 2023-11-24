let slideIndex = 3;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-div");
  let dots = document.getElementsByClassName("slider-btn");
  let sliderr = document.getElementById('slider-divs-id');
  // for (i = 0; i < slides.length; i++) {
  //      slides[i].style.display = "none";
  // }
  for (i=0; i<slides.length; i++) {
    slides[i].style.height = 570 + 'px';
    slides[i].style.opacity = 0.55;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.height = 600 + 'px';
  slides[slideIndex-1].style.opacity = 1;
  if(slideIndex==1){
    sliderr.style.marginRight = 212 + 'px';
  }
  else if(slideIndex==2){
    sliderr.style.marginRight = -906 + 'px';
  }
  else if(slideIndex==3){
    sliderr.style.marginRight = -2032 + 'px';
  }
  else if(slideIndex==4){
    sliderr.style.marginRight = -3155 + 'px';
  }
  else{
    sliderr.style.marginRight = -4280 + 'px';
  }
  dots[slideIndex-1].className += " active";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById("fixnav").style.top = 100 + 'px';
      document.getElementById("fixnav").style.boxShadow = '0px 0px 16px 5px rgba(0,0,0,0.2)'
    } else {
      document.getElementById("fixnav").style.top = 31 + 'px';
      document.getElementById("fixnav").style.boxShadow = 'none'
    }
}

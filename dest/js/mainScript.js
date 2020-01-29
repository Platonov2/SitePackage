var pauseDuration = 5000;
var scrollDuration = 3000;
var currentSlideId = 0;
var currentButtonId = 0;
var sliderWidth = 0;
var slideWidth = 0;

var countButtons = 2;
var slideWidth = 0;

$(document).ready(function() {
    document.getElementsByClassName("buttonImg")[0].style.visibility = "visible";
    var slideInterval = setInterval(nextSlide, pauseDuration);

    slideWidth = document.getElementsByClassName("slide")[currentSlideId].offsetWidth;

    $("#slider").mouseover(function() {
        clearInterval(slideInterval);   
    }).mouseout(function(){           
        slideInterval = setInterval(nextSlide, pauseDuration);
    });

    document.onclick = function( e )
    {
        var target = e.target;
        
        if (target.className == "button"){
            $("#slider").stop(true);


            if (target.offsetParent.childNodes[1] == target){
                clearInterval(slideInterval);
                prevSlide();
                slideInterval = setInterval(nextSlide, pauseDuration);
            }
            if (target.offsetParent.childNodes[3] == target){
                clearInterval(slideInterval);
                nextSlide();
                slideInterval = setInterval(nextSlide, pauseDuration);
            }
        }
    }
});

function prevSlide() {

    sliderWidth = sliderWidth - slideWidth;
    currentSlideId = currentSlideId - 1;
    currentButtonId = currentButtonId - 1;

    document.getElementsByClassName("buttonImg")[1].style.visibility = "hidden";
    document.getElementsByClassName("buttonImg")[0].style.visibility = "visible";
    $('#slider').animate({"margin-left" : "-" + sliderWidth + "px",}, scrollDuration, "swing", null);

}

function nextSlide() {

    sliderWidth = sliderWidth + slideWidth;

    currentSlideId = currentSlideId + 1;
    currentButtonId = currentButtonId + 1;

    if (currentButtonId == countButtons){
        document.getElementsByClassName("buttonImg")[countButtons - 1].style.visibility = "hidden";
        currentButtonId = 0;
    }
    else{
        document.getElementsByClassName("buttonImg")[(currentButtonId % countButtons) - 1].style.visibility = "hidden";
    }
    document.getElementsByClassName("buttonImg")[currentButtonId % countButtons].style.visibility = "visible";
    $('#slider').animate({"margin-left" : "-" + sliderWidth + "px",}, scrollDuration, "swing", appendSlide());
    
}

function appendSlide() {
    var slider = document.getElementById("slider");
    var clone = document.getElementsByClassName("slide")[currentSlideId - 1].cloneNode(true);
    
    slider.appendChild(clone);
}
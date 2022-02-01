


// function currentSlide(slideIndex) {
// var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");

//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//       dots[i].style.backgroundColor="red";
//   }
 
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].style.backgroundColor = " green";
// }
// currentSlide(1);



// $(document).ready(function() {
// 	$(".active").show();
// 	$("#slider-div").hover(function(){$(".btn-carousel").show();},function(){$(".btn-carousel").hide();})
// 	$(".btn-carousel").on('click',function(){
// 		var id = $(this).attr('id');
// 		var nav;
// 		if(id=="previous") {
// 			nav = $("img.active").prev('img');
// 			if(nav.length == 0) nav = $("img").last();
// 		} else if(id=="next") {
// 			nav = $("img.active").next('img');
// 			if(nav.length == 0) nav = $("img").first();
// 		}
// 		$("img.active").hide();
// 		$("img.active").removeClass("active");
// 		nav.addClass("active");
// 		nav.fadeIn(1000);
// 	});	
// });
$(document).ready(function() {
    $('.next').on('click', function(){
        var curImage=$('.active');
        var nextImage=curImage.next();

        if(nextImage.length){
            curImage.removeClass('active').css('z-index', -10);
            nextImage.addClass('active').css('z-index', 10);   
        }


    });

    $('.prev').on('click', function(){
        var curImage=$('.active');
        var prevImage=curImage.prev();

        if(prevImage.length){
            curImage.removeClass('active').css('z-index', -10);
           prevImage.addClass('active').css('z-index', 10);   
        }


    });
});
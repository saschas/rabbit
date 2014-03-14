$(document).ready(function(){

slideshow = function($array){

	var createNavi = function(){
		var slideAnzahl = $('.slideshow li').length;
		var SlideshownavHolder = document.createElement('div');
			SlideshownavHolder.setAttribute('class','slideshow-navi');
		var SlideshowLeft = document.createElement('div');
			SlideshowLeft.setAttribute('class','slideshow-left');
			SlideshowLeft.addEventListener('click',function(){
				nextSlide(slideAnzahl,'prev');
			})
		var SlideshowRight = document.createElement('div');
			SlideshowRight.setAttribute('class','slideshow-right');
			SlideshowRight.addEventListener('click',function(){
				nextSlide(slideAnzahl,'next');
			})

			SlideshownavHolder.appendChild(SlideshowLeft);
			SlideshownavHolder.appendChild(SlideshowRight);
		$('.slideshow').append(SlideshownavHolder);
	}
	
	var firstSlide = function(){
		$('.slideshow li:nth-child(1)').addClass('active');
	}
	var nextSlide = function($max,$direction){
		var prevSlide = $('.slideshow li.active').index();
		if(prevSlide == 0){
			firstSlide();
		}
		var currSlide = prevSlide+1;
		var prevSlide = currSlide-1;
		var nextSlide = currSlide+1;

		if(currSlide === $max){
			nextSlide = currSlide;
		}else{}

		if($direction == 'prev' && currSlide > 1 && !$('.slideshow li:nth-child(1)').hasClass('active')){
			$('.slideshow li:nth-child('+currSlide+')').attr('class','').addClass('slide-out-right');
			$('.slideshow li:nth-child('+prevSlide+')').attr('class','').addClass('active slide-in-left');
		}
		if($direction == 'next' && currSlide <= $max){
			$('.slideshow li:nth-child('+currSlide+')').attr('class','').addClass('slide-out-left');
			$('.slideshow li:nth-child('+nextSlide+')').attr('class','').addClass('active slide-in-right');
		}	
	}
	var createPagination = function(){
		var slideAnzahl = $('.slideshow li').length;
		var paginationHolder = document.createElement('ul');
			paginationHolder.setAttribute('class','pagination');

		var pageWidth = 100 / slideAnzahl;

		for(var i=0;i<slideAnzahl;i++){
			var dot = document.createElement('li');
				dot.style.width = pageWidth + '%';

			if(i==0){
				dot.setAttribute('class','active');
			}
			dot.addEventListener('click',function(){
				var el = $(this);
				var curr = el.index();
				if(!el.hasClass('active')){
					var prevSlide = $('.pagination li.active').index();
						prevSlide = prevSlide+1;
					console.log(prevSlide);
					if(prevSlide >curr){
						nextSlide(slideAnzahl,'prev');
					}
					else{
						nextSlide(slideAnzahl,'next');
					}
					$('.pagination li').removeClass('active');
					$(this).addClass('active');
				}
					curr = curr+1;
			},false);
			paginationHolder.appendChild(dot);
		}
		$('.slideshow .slideshow-right,.slideshow .slideshow-left').click(function(){
			$('.pagination li').removeClass('active');
			var index = $('.slideshow li.active').index();
			index = index+1;
			console.log(index);
			$('.pagination li:nth-child('+index+')').addClass('active');
		});

		$('.slideshow').after(paginationHolder);
	}
	var init = function($args){

		console.log($args);
		firstSlide();
		createNavi();

		if($args.pagination){
			createPagination();
		}
	}
	init($array);
}

})
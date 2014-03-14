$(document).ready(function(){
	 //$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
	 hljs.initHighlightingOnLoad();
	 $('.description .inner span.more').click(function(){
	 	$(this).parent().parent().parent().toggleClass('open');
	 });

(function(){
	var Rabbit = function(){

		//slideshow
	 	this.slideshow = function($options){
	 		slideshow($options);
	 	}
	 }
	rabbit = new Rabbit();
})();

	var $options = {
  		'pagination':true, //default true
  		'loop':true, //known issue: only if you slide right
  		'height':300,	//in px
  		'width':100,	//in %
  	}
  //init with arguments
  rabbit.slideshow($options);
});
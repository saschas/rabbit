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
  		'pagination':true //default true
  	}
  //init with arguments
  rabbit.slideshow($options);
});
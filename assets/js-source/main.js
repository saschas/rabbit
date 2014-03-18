$(document).ready(function(){
	 //$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
	 hljs.initHighlightingOnLoad();
	 $('.description .inner span.more').click(function(){
	 	$(this).parent().parent().parent().toggleClass('open').address.value($(this).attr('href'));

	 });


var generateLinkfromURL = function($event){
  var currID = $event;
      currID = '#' + currID.split('/','2')[1];
      return currID;
}
var generateLinkfromClick = function($event){
  var currID = $event;
  console.log(currID)
      currID = currID.split('#','2')[1];
      return currID;
}

var loadURL = function (url) {
  console.log('assets/examples/html/'+url+'.html');
}
$.address.init(function(event) {
    var link = generateLinkfromURL(event.value);
    $(link).addClass('open');

}).change(function(event) {
  var link = generateLinkfromURL(event.value);
  $(link).addClass('open');
})

$('a.more').click(function(){
  $('.open').removeClass('open');
  var link = $(this).attr('href');
  $(link).toggleClass('open');
});



(function(){
	var Rabbit = function(){

		//slideshow
	 	this.slideshow = function($options){
	 		slideshow($options);
	 	}
	 	this.bg = function($options){
	 		rabbitBG($options)
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

  var $bg1 = {
    style : 'simple',
    identifier:1,
    col:6,
    offset:3,
    image:'assets/img/lorempixum2.jpg'
  }
  var $bg2 = {
    style : 'round',
    identifier:2,
    col:6,
    offset: 2,
    image:'assets/img/lorempixum2.jpg'
  };
  var $bg3 = {
    style : 'cube',
    identifier:3,
    col:4,
    offset:1,
    image:'assets/img/lorempixum2.jpg'
  };
  var $bg4 = {
    style : 'cube',
    identifier:4,
    col:2,
    offset:.8,
    image:'assets/img/lorempixum2.jpg'
  };


  rabbit.bg($bg1);
  rabbit.bg($bg2);
  rabbit.bg($bg3);
  rabbit.bg($bg4);
  

});
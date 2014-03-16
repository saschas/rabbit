$(document).ready(function(){

var rabbitBG = function($args){

  //Helper just for now...allows only col=row
  if(!$args.col){
    $args.col = 10;
  }
  if(!$args.offset){
    $args.offset = 1;
  }
  $args.row = $args.col;
  
  getRealSize = function($args){
    var x,y;
    var imgTag = new Image();
    imgTag.onload = function() {
      x = this.height,
      y = this.width;
      ratio = (x/y);
      curr_x = $('div[data-bg-style="'+$args.element+'"]').width();
      curr_y = $('div[data-bg-style="'+$args.element+'"]').height(curr_x*ratio);
    }
    imgTag.src = $args.image;
  }
  
  var row = [];
  var $currCol=-1;
  var $currRow=0;
  var basicSetup = function($index,$args){

      if($index==1){
        getRealSize($args);
      }
      var inner = document.createElement('div');
          inner.setAttribute('class','inner');
          inner.style.margin = $args.offset + '%';
          inner.style.width = 100/$args.col-($args.offset*2) + '%';
          inner.style.height = 100/$args.row-($args.offset*2) + '%';
          if($args.bubble){
            inner.style.borderRadius = '50%';
          }
          inner.style.backgroundImage = 'url('+$args.image+')';
          inner.style.backgroundSize = 100*($args.col) + '%';
          $currCol++;
          if($currCol == $args.col){
            $currCol = 0;
            $currRow++;
          }
          inner.style.backgroundPositionX = 100/($args.col-1)*($currCol) + '%';
          inner.style.backgroundPositionY = 100/($args.col-1)*($currRow) + '%';
          row.push(inner);
  }
  var tiles = function($args){
    for(var i=0;i<$args.col*$args.row;i++){
        basicSetup(i,$args);
      }
    $('div[data-bg-style="'+$args.element+'"]').append(row);
  };

  tiles($args);
}

var init = function(){
  new rabbitBG({
    element : 'simple',
    col:10,
    offset:'1',
    bubble:true,
    image:'assets/img/lorempixum-650.jpg'
  });
  new rabbitBG({
    element : 'round',
    col:4,
    offset:'1',
    bubble:false,
    image:'assets/img/lorempixum2.jpg'
  });
}

init();

});
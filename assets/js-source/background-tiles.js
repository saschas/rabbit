$(document).ready(function(){

rabbitBG = function($args){
  
  var row = [];
  var $currCol=-1;
  var $currRow=0;
  
  //Helper just for now...allows only col=row
  if(!$args.col){
    $args.col = 10;
  }
  if(!$args.offset){
    $args.offset = 1;
  }

  $args.row = $args.col;
  
  var getRealSize = function($args){
    var x,y;
    var imgTag = new Image();
    imgTag.onload = function() {
      x = this.height,
      y = this.width;
      ratio = (x/y);
      curr_x = $('div[data-bg-id="'+$args.identifier +'"]').width();
      curr_y = $('div[data-bg-id="'+$args.identifier +'"]').height(curr_x*ratio);
    }
    imgTag.src = $args.image;

  }  
  
  var basicSetup = function($index,$args){

    if($index==1){
      getRealSize($args);
    }
    var inner = document.createElement('div');
        inner.setAttribute('class','inner'+ ' ' + $args.style);
        inner.style.margin = $args.offset + '%';
        inner.style.width = 100/$args.col-($args.offset*2) + '%';
        inner.style.height = 100/$args.row-($args.offset*2) + '%';
        inner.style.backgroundImage = 'url('+$args.image+')';
        inner.style.backgroundSize = 100*($args.col) + '%';
    
        $currCol++;
        if($currCol == $args.col){
          $currCol = 0;
          $currRow++;
        }
    
        inner.style.backgroundPosition = 100/($args.col-1)*($currCol) + '%' +' '+ 100/($args.col-1)*($currRow) + '%';
        row.push(inner);
  }

  var tiles = function($args){
    for(var i=0;i<$args.col*$args.row;i++){
        basicSetup(i,$args);
      }

    $('div[data-bg-id="'+$args.identifier+'"]').append(row);
  };

  //init function
  tiles($args);
}

//div[data-bg-id for identification
//div[data-bg-style for style
//div[data-type for type like 'bg,slideshow'

  

})
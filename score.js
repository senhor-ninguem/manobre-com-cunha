function Score(){

  var pointM, pointR;
  var getRangePoint = function (){
    var MAX_POINT = 500;
    var variation = pointM - pointR;

    variation = ( variation > 0 ) ? variation : 0;
    return 100 - ( (variation * 100) / MAX_POINT  );

  };

  var updateThermometer = function(){
    var colorGradient = getRangePoint();

    var rangeOne = '#044D96 40%';
    var rangeTwo = '#0058AA 60%';
    var rangeThree = '#841F62 80%';
    var customColor = '-webkit-linear-gradient(top, #fff 0%, #fff '+colorGradient+'%,'+rangeOne+','+rangeTwo+','+rangeThree+', #0058aa 100%)';

    $('.thermometer')
      .css('background', customColor);

    var estado = '3.png';

    if( colorGradient > 60 ){
      estado = '1.png';
    }else if( colorGradient > 30 ) {
      estado = '2.png';
    }

    $('img.state').attr('src', 'estado/'+estado);

  };

  this.finish = function(){
    var colorGradient = getRangePoint();


    $('.range').hide();
    if( colorGradient > 60 ){
      $('#range-one').show();
    }else if( colorGradient > 30 ) {
      $('#range-two').show();
    }else{
      $('#range-three').show();
    }

    window.location.hash = 'modal-finish';
  };

  this.start = function(){
    pointM = 0;
    pointR = 0;
  };
  this.manipulation = {
    addPoint: function(){
      pointM++;
      updateThermometer();
    }
  };
  this.remand = {
    addPoint: function(){
      pointR++;
      updateThermometer();
    }
  };

}

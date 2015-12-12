DEFAULT_TIMER = 10;

var Countdown = function(){
  var interval;
  var counter = DEFAULT_TIMER;

  var stop =  function(game){
    counter = DEFAULT_TIMER;
    $('#timer').text(counter);
    game.stop();
  };

  var down =  function(sec){
     $('#timer').text(sec);
  };

  this.start = function(game, callback){
    var f = callback || function(){};

    interval = setInterval(function() {
      counter--;
      if(counter < 0) {
        stop(game);
        f();
        clearInterval(interval);
      } else {
        down(counter);
      }
    }, 1000);
  };
}

$('#timer').text(DEFAULT_TIMER);

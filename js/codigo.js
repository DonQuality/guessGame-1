$(function(){
  var answer = "puerto rico";
  var answer2 = "cuba";
  var answer3 = "asia";

  var repeat = function(){
    var guess = prompt("Where do you think i'm from?").toLowerCase();
    if (guess === answer) {
      alert('You got that right!!!');
    } else if (guess === answer2){
      alert("I am not cuban, but our flag is very similar to their flag, Please try again!!!.");
      repeat();
    } else if (guess === answer3){
      alert("They call me chino but im not Asian. Try again!!!.");
      repeat();
    } else{
      alert("Not from there,Try again!!!");
      repeat();
    }
  }
  $('#click_me').on('click', repeat);
});

$('#i-hide').mouseenter(function(){
  $('#i-hide').css({
  "border-radius":"5em"
  },'slow');
});
// shows the container when clicked
$('#m-open').click(function(){
  $('#menu-container').show(function(){
    $(this).click().animate({
      "height":"500px"
    }, 'fast');
  });
});

$('#menu-container').mouseleave(function(){
  $('#menu-container').hide(function(){
    $(this).animate({
      "height":"0px"
    }, 'fast');
  });
});

$('footer').hover(function(){
  $('footer').animate({
  "height":"30px"
  });
});















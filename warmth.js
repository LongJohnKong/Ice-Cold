var count = 100;

var counter = setInterval(timer, 597); //1000 will  run it every 1 second //good one moan

function timer()
{
  count = count - 1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
}

if (count == 0)
{
	Player.x = -100;
	Player.y = -100;
	
	context.fillStyle = "#FFF";
	context.font = "32px Arial";
	context.fillText("You Froze Boy", 200, 240);
	
	froze.play()
}
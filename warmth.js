var count = 100;

var counter = setInterval(timer, 597);

function timer()
{
  count = count-1;
  if (count == -1)
	{
		clearInterval(counter);
		context.fillStyle = "#FFF";
		context.font = "32px Arial";
		context.fillText("You Froze Boy", 200, 240);
		return;
	}
	document.getElementById("timer").innerHTML=count + " Warmth";
}

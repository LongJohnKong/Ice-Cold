var count = 100;
var death = new GameOverState (0,0);
var counter = setInterval(timer, 100);

function timer()
{
	count = count -1;
	if (count == -1)
	{
	 count = 0
	 death
	}
	
	document.getElementById("timer").innerHTML=count + " Warmth";
}

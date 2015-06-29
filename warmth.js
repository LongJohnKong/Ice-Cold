var count = 100;
var counter = setInterval(timer, 1000);
var deathBG = document.createElement ("img")
deathBG.src = "gameover.png";


function timer(deltaTime)
{
	count = count - 10;
	if (count < 0)
	{
		count = 0
	}
	
	document.getElementById("timer").innerHTML=count + " Warmth";
}

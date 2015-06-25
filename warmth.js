//var count = 100;
//document.context.font = "32px Arial";
//document.context.fillStyle = "#FFF";
//document.context.fillText(count, 200, 240)
//
//var counter = setInterval(timer, 597); //1000 will  run it every 1 second //good one moan
//
//function timer()
//{
//  count = count - 1;
//  if (count <= 0)
//  {
//     clearInterval(counter);
//     return;
//  }
//}

var count = 100;

var counter = setInterval(timer, 597);

function timer()
{
  count = count-1;
  if (count == 0)
	{
		clearInterval(counter);
		context.fillStyle = "#FFF";
		context.font = "32px Arial";
		context.fillText("You Froze Boy", 200, 240);
		return;
	}
	document.getElementById("timer").innerHTML=count + " Warmth";
}

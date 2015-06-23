//GAME_STATE CONSTANTS
var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_GAMEOVER = 2;

var splashmain = document.createElement ("img");

splashmain.src = "splashmain.png"

//var SplashTimer = 3;

function runSplash(dt)
{
	//counts down three seconds then switches to the game
//SplashTimer -= dt;
//if (SplashTimer <= 0)
//{
//	gameState = STATE_GAME;
//	return;
//}
//
	var Message = "A S T E R O I D S";
	
	var TextMeasure = context.measureText(Message);
	context.drawImage( splashmain,
							   x * 0, y * 0);
	context.fillStyle = "#f0f";
	context.font = "32px Arial";
	context.fillText(Message, CANVASWIDTH/2 - (TextMeasure.width/2), CANVASHEIGHT/2);
	
	context.fillStyle = "#0f0";
	context.font = "32px Arial";
	context.fillText(Message, CANVASWIDTH/2 - (TextMeasure.width/2+2), CANVASHEIGHT/2+2);

}

function endGame()
{
}

function runGame(dt)
{
	
}
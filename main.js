// MAIN
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
////////////////////////////////////////////////////////////
//						CONSTANTS						 //
//////////////////////////////////////////////////////////
var CANVASWIDTH = canvas.width;
var CANVASHEIGHT = canvas.height;

var gameState = STATE_SPLASH;

//DELTA TIME
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//SOUNDS N MUSIC
var music = new Howl(
{
		urls: ["bg.mp3"],
		loop : true,
		buffer : true,
		volume : 1
});

var froze = new Howl(
{
		urls: ["crunch.wav"],
		loop : false,
		buffer : true,
		volume : 1
});

music.play();
function run()
{

	switch (gameState)
	{
		case STATE_SPLASH:
			runSplash(deltaTime);
			break;
		case STATE_GAME:
			runGame(deltaTime);
			break;

		case STATE_GAMEOVER:
			runEnd(deltaTime);
			break;
	}
	context.fillStyle = "#ccc"
	context.fillRect(0, 0, 	canvas.width, canvas.height)
	var deltaTime = getDeltaTime()
	DEMONSTRATION(deltaTime,CANVASWIDTH,CANVASHEIGHT)
	
};

(function() {
	var onEachFrame;
	if (window.requestAnimationFrame) 
	{
		onEachFrame = function(cb) 
		{
			var _cb = function() 
			{ 
				cb();
				window.requestAnimationFrame(_cb); 
			}
		_cb();
		};
	}
	else if (window.mozRequestAnimationFrame)
	{
		onEachFrame = function(cb) 
		{
			var _cb = function() 
			{ 
				cb();	//mozilla
				window.mozRequestAnimationFrame(_cb); 
			}
		_cb();
		};
	}
	else 
	{
		onEachFrame = function(cb) //any ol browser
		{
			setInterval(cb, 1000 / 60);
		}
	}
	window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);


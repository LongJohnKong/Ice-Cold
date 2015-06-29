// MAIN
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
////////////////////////////////////////////////////////////
//						CONSTANTS						 //
//////////////////////////////////////////////////////////
var CANVASWIDTH = canvas.width;
var CANVASHEIGHT = canvas.height;

var SceneManager = new StateStack();
SceneManager.push( new GameState() );
SceneManager.push( new SplashState() );

var TotalTimePassed = 0;

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
	
	
	var deltaTime = getDeltaTime();
	TotalTimePassed += deltaTime;
	
	DEMONSTRATION(deltaTime)
	
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


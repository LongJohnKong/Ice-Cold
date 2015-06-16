//First get access to our canvas object we've defined in our html
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//sets a listener functions so we can get input from the player
window.addEventListener('keydown', function(evt) { onKeyDown(evt); }, false);
window.addEventListener('keyup', function(evt) { onKeyUp(evt); }, false);

////////////////////////////////////////////////////////////
//CONSTANTS
var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

//Grass Tiles
var Grass = document.createElement("img");

Grass.src = "grass.png";

var Background = [];

for (var y = 0; y < 15; y++)
{
	Background[y] = [];
	for (var x = 0; x < 20; x++)
	{
		Background[y][x] = Grass;
	}
}

var lastUpdate = Date.now();

var SplashTimer = .5;
function runSplash(dt)
{
	SplashTimer -= dt;
	if (SplashTimer <= 0)
	{
		gameState = STATE_GAME;
		return;
	}
	
	context.fillStyle = "#FF0";
	context.font = "18px Arial";
	context.fillText("Ice Cold", 200, 240);	
}

function runGame(dt)
{
	if (ShootTimer > 0)
		ShootTimer -= dt;

	for (var y = 0; y < 15; y++)
{
	for (var x = 0; x < 20; x++)
	{
		context.drawImage( Background[y][x],
						   x * 32, y * 32);
	}
}

context.fillStyle = "#FF0"
context.font = "18px Arial";
var TextMeasure = context.measureText("Warmth" + count);
context.fillText("Warmth: " + count, SCREEN_WIDTH - (TextMeasure.width + 20), SCREEN_HEIGHT/15);

context.drawImage(Enemy.image, 20,20);

if (count == 0)
{
	Player.x = -100;
	Player.y = -100;
	
	context.fillStyle = "#FFF";
	context.font = "32px Arial";
	context.fillText("You Froze Boy", 200, 240);
}

	//Player Movement
	
	var s = Math.sin(Player.rotation);
	var c = Math.cos(Player.rotation);

	var xDir = (Player.directionX * c) - (Player.directionY * s);
	var yDir = (Player.directionX * s) + (Player.directionY * c);
	var xVel = xDir * PLAYER_SPEED;
	var yVel = yDir * PLAYER_SPEED;

	Player.x += xVel;
	Player.y += yVel;
	
	Player.rotation += Player.angularDirection * PLAYER_TURN_SPEED;

	context.save();
		context.translate( Player.x, Player.y);
		context.rotate(Player.rotation);
		context.drawImage(Player.image, -Player.width/2, -Player.height/2);
	context.restore();
}

function runEnd(dt)
{

}

//callback function to run each frame
function run()
{
	var now = Date.now();
	var DeltaTime = (now - lastUpdate) * 0.001;
	lastUpdate = now;

	//var Part = new Emitter("particle.png" , SCREEN_WIDTH/2, SCREEN_HEIGHT/2, 3000);
	//Part.update(DeltaTime);
	//Part.draw();
	
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);

	
	switch (gameState)
	{
		case STATE_SPLASH:
			runSplash(DeltaTime);
			break;
		case STATE_GAME:
			runGame(DeltaTime);
			break;

		case STATE_GAMEOVER:
			runEnd(DeltaTime);
			break;
	}
	
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


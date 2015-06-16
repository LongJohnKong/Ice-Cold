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

var PLAYER_SPEED = 2.5;
var PLAYER_TURN_SPEED = .05;
var BULLET_SPEED = 15;
 
var KEY_SPACE 	= 32;
var KEY_LEFT 	= 37;
var KEY_DOWN 	= 38;
var KEY_RIGHT	= 39;
var KEY_UP 	= 40;

//GAME_STATE CONSTANTS
var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_GAMEOVER = 2;

var gameState = STATE_SPLASH;

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

//Player Values
var Player = 
{
	image : document.createElement("img"),
	x : SCREEN_WIDTH/2,
	y : SCREEN_HEIGHT/2,
	width : 128,
	height : 128,
	directionX: 0,
	directionY: 0,
	angularDirection: 0,
	rotation: 0
};

Player.image.src = "yeti1.png";

//var Bullets = [];

//function fires a bullet in the diretcion the player is facing
//function playerShoot()
//{
//	var Bullet = 
//	{
//		image : document.createElement("img"),
//		x : Player.x,
//		y : Player.y,
//		width : 5,
//		height : 5,
//		velocityX : 0,
//		velocityY : 0
//	}
//	Bullet.image.src = "ship.png"
//
//	var dirX = 0;
//	var dirY = 1;
//
//	var s = Math.sin(Player.rotation);
//	var c = Math.cos(Player.rotation);
//	var xVel = (dirX * c) - (dirY * s);
//	var yVel = (dirX * s) + (dirY * c);
//
//	Bullet.velocityX = xVel * BULLET_SPEED;
//	Bullet.velocityY = yVel * BULLET_SPEED;
//
//	Bullet.x = Player.x;
//	Bullet.y = Player.y;
//
//	Bullets.push(Bullet);
//}
//
//Misc Functions
function rand(floor, ceil)
{
	return Math.floor( (Math.random() * (ceil - floor)) + floor );
}

//AABB Collision function
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if ( 	y2 + h2 < y1 ||
			x2 + w2 < x1 ||
				x2 > x1 + w1 ||
				y2 > y1 + h1)
		return false;

	return true;
}

var ShootTimer = 0;

{
	function onKeyDown(event)
	{
		if (event.keyCode == KEY_UP)
		{
			Player.directionY = 1;
		}
		if (event.keyCode == KEY_DOWN)
		{
			Player.directionY = -1;
		}
		if (event.keyCode == KEY_LEFT)
		{
			Player.angularDirection = -1;
		}
		if (event.keyCode == KEY_RIGHT)
		{
			Player.angularDirection = 1;
		}
		if (event.keyCode == KEY_SPACE && ShootTimer <= 0)
		{
			ShootTimer += 0.3;
			playerShoot();
		}
	}
	
	function onKeyUp(event)
	{
		if (event.keyCode == KEY_UP)
		{
			Player.directionY = 0;
		}
		if (event.keyCode == KEY_DOWN)
		{
			Player.directionY = 0;
		}
		if (event.keyCode == KEY_LEFT)
		{
			Player.angularDirection = 0;
		}
		if (event.keyCode == KEY_RIGHT)
		{
			Player.angularDirection = 0;
		}
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
	

	//for (var i = 0; i < Bullets.length; i++)
	//{
	//	Bullets[i].x += Bullets[i].velocityX;
	//	Bullets[i].y += Bullets[i].velocityY;
    //
	//	context.drawImage(Bullets[i].image,
	//					Bullets[i].x - Bullets[i].width/2,
	//					Bullets[i].y - Bullets[i].height/2);
    //
	//	if (Bullets[i].x > SCREEN_WIDTH || Bullets[i].x < 0 ||
	//		Bullets[i].y > SCREEN_HEIGHT || Bullets[i].y < 0)
	//	{
	//		Bullets.splice(i, 1);
	//	}
	//
	//}
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



//DUNNA TOUCH ME BOYOO
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//essentially a function that sets our callback function run() to be called every frame
//with handling of different browsers
(function() {
	var onEachFrame;
	if (window.requestAnimationFrame) 
	{
		onEachFrame = function(cb) 
		{
			var _cb = function() 
			{ 
				cb(); //ie or chrome
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

//call our function
window.onEachFrame(run);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

var PLAYER_SPEED = 2.5;
var PLAYER_TURN_SPEED = .05;
//Player Values
var Player = 
{
	image : document.createElement("img"),
	x : 640/2,
	y : 480/2,
	width : 128,
	height : 128,
	directionX: 0,
	directionY: 0,
	angularDirection: 0,
	rotation: 0
};

Player.image.src = "yeti1.png";
	
/*	
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
*/

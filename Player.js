var PLAYER_SPEED = 2.5;
var PLAYER_TURN_SPEED = .05;
//Player Values
var Player = function()
{
	this.image = document.createElement("img")
	this.image.src = "yeti1.png"
	this.pos.x = CANVAS_WIDTH
	this.pos.y = CANVAS_HEIGHT
}

Player.image.src = "yeti1.png";

// MOVEMENT

	var s = Math.sin(Player.rotation);
	var c = Math.cos(Player.rotation);

	var xDir = (Player.directionX * c) - (Player.directionY * s);
	var yDir = (Player.directionX * s) + (Player.directionY * c);
	var xVel = xDir * PLAYER_SPEED;
	var yVel = yDir * PLAYER_SPEED;

	Player.x += xVel;
	Player.y += yVel;
	
	Player.rotation += Player.angularDirection * PLAYER_TURN_SPEED;

// DRAWING
	
	context.save();
		context.translate( Player.x, Player.y);
		context.rotate(Player.rotation);
		context.drawImage(Player.image, -Player.width/2, -Player.height/2);
	context.restore();

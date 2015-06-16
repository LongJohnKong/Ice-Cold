var PLAYER_SPEED = 2.5;
var PLAYER_TURN_SPEED = .05;
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
	

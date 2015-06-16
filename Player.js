var PLAYER_SPEED = 2.5;
var PLAYER_TURN_SPEED = .05;
//Player Values
var Player = function()
{
	this.image = document.createElement("img")
	this.image.src = "yeti1.png"
	this.PositionX = 640/2
	this.PositionY = 480/2
	this.speed = 5
}

Player.prototype.update = function()
{
	if(Keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.PositionX -= this.speed
	}
	
	if(Keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		this.PositionX += this.speed
	}
	
	if(Keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.PositionY -= this.speed
	}
	
	if(Keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		this.PositionY += this.speed
	}
}

Player.prototype.draw = function()
{
	this.context.drawImage(this.image,this.pos.x,this.pos.y)
}

// DRAWING
//	
//	context.save();
//		context.translate( Player.x, Player.y);
//		context.rotate(Player.rotation);
//		context.drawImage(Player.image, -Player.width/2, -Player.height/2);
//	context.restore();

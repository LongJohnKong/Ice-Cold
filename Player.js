//Player Values

var keyboard = new Keyboard();

var Player = function(x,y)
{
	this.image = document.createElement("img")
	this.image.src = "yeti1.png"
	this.PositionX = x/2
	this.PositionY = y/2
	this.speed = 5
}

Player.prototype.update = function()
{
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.PositionX -= this.speed
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		this.PositionX += this.speed
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.PositionY -= this.speed
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		this.PositionY += this.speed
	}
}

Player.prototype.draw = function(context)
{
	context.drawImage(this.image,this.PositionX,this.PositionY)
}

// DRAWING
//	
//	context.save();
//		context.translate( Player.x, Player.y);
//		context.rotate(Player.rotation);
//		context.drawImage(Player.image, -Player.width/2, -Player.height/2);
//	context.restore();

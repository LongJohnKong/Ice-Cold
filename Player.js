//Player Values

var keyboard = new Keyboard();

var Player = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "yeti1.png";
	this.angularDirection = 1;
	this.rotation = 0;
	this.directionX = 0;
	this.directionY = 1;
	
	this.PositionX = x/2;
	this.PositionY = y/2;
	this.speed = 1;
	this.friction  = 1;
	this.currentSpeed = 0;
	this.maxSpeed = 1;
}

Player.prototype.update = function(dt)
{	
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		this.rotation -= 0.1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		this.rotation += 0.1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		this.currentSpeed -= this.speed;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		this.currentSpeed += this.speed;
	}
	
	//Slows down the player
	if (this.currentSpeed > 0)
	{
		this.currentSpeed - 1;	
	}
	
	if (this.currentSpeed < 0)
	{
		this.currentSpeed + 1;
	}
	var now = Date.now();
	var lastUpdate = Date.now();
	var DeltaTime = (now - this.lastUpdate) * 0.001;
	this.lastUpdate = now;
	
	////Caps the player speed
	//if (this.currentSpeed = 2)
	//{
	//	this.currentSpeed = 0;	
	//}
	//
	//if (this.currentSpeed = -1)
	//{
	//	this.currentSpeed = 0;
	//}
	
	//Rotation
	var s = Math.sin(this.rotation);
	var c = Math.cos(this.rotation);

	var xDir = (this.directionX * c) - (this.directionY * s);
	var yDir = (this.directionX * s) + (this.directionY * c);
	
	var xVel = xDir * this.currentSpeed;
	var yVel = yDir * this.currentSpeed;
	
	//adds our calculated velocity
	this.PositionX += xVel;
	this.PositionY += yVel;
	
	//Rotates
	//this.rotation += 0.1;// this.angularDirection * this.speed;	
}


Player.prototype.draw = function(context)
{
	context.save();
		context.translate( this.PositionX, this.PositionY);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
	context.restore();
}


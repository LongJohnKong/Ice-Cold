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
	
	this.alive = true;
	this.playerWidth = 96;
	this.playerHeight = 61;
	this.PositionX = x;
	this.PositionY = y;
	this.speed = 1;
	this.currentSpeed = 0;
	this.minSpeed = 5;
	this.maxSpeed = -5;
}

Player.prototype.update = function(deltaTime)
{	
	if (this.alive == true)
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
			this.currentSpeed = this.maxSpeed;
		}
		
		if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
		{
			this.currentSpeed = -this.maxSpeed;
		}
			
		else
		
		if(keyboard.isKeyDown(keyboard.KEY_UP) == false)
		{
			this.currentSpeed = 0;
		}
	}
	
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
	
	
}

Player.prototype.draw = function(context)
{
	context.save();
		context.translate( this.PositionX, this.PositionY);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
	context.restore();	
}	

var fur = function(x,y)
{
	this.PosX = x;
	this.PosY = y;
	this.image = document.createElement("img");
	this.image.src = "FUR.png";
	this.width = 50;
	this.height = 50;
}


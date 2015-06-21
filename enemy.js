//Enemy Values
var Enemy = function(x,y)
{
	this.image = document.createElement("img")
	this.image.src = "enemy.png"
	this.PositionX = 100
	this.PositionY = 100
	this.speed = 3
	this.ALIVE = true
};

	var MoveA = false
	var MoveB = false
	var MoveC = false

Enemy.prototype.update = function(deltatime)
{
	
	if(this.PositionX != 400 && this.PositionY !=200)
	{
		if(this.PositionX != 400)
		{
			this.PositionX += this.speed
		}
	}
	
	if(this.PositionX == 400 && this.PositionY != 200)
	{
		if(this.PositionY != 200)
		{	
			this.PositionY += this.speed
		}	
	}
}

Enemy.prototype.draw = function(context)
{
	context.drawImage(this.image,this.PositionX,this.PositionY)
}
//Enemy Values
var Enemy = function(x,y)
{
	this.image = document.createElement("img")
	this.image.src = "enemy.png"
	this.PositionX = 100
	this.PositionY = 100
	this.speed = 2
	this.ALIVE = true
};

	var MoveA = false
	var MoveB = false
	var MoveC = false
	
Enemy.prototype.update = function(deltatime)
{
	if(this.PositionX != 400)
	{
		this.PositionX += this.speed
	}
	
	if(this.PositionX == 400)
	(
		MoveA = true
	)
	
	if (MoveB === false && MoveA == true)
	{
		this.PositionY += this.speed
	}
	
	if(this.PositionY == 350)
	{
		MoveB = true
	}
	
	if(MoveB === true)
	{
		this.PositionX -= this.speed
	}
	
}

Enemy.prototype.draw = function(context)
{
	context.drawImage(this.image,this.PositionX,this.PositionY)
}
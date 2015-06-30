var player = new Player();
var collision  = new Collision()
var bonfire = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "bonfire.png";
	this.PositionX = x/2;
	this.PositionY = y/2;
	this.active = false;
	this.areaHeat = collision.collided
	this.Width = this.image.width
	this.Height = this.image.height
}

bonfire.prototype.update = function(deltatime)
{
	collision.update(this.PositionX-50,this.PositionY-50,250,250,player.PositionX,player.PositionY,player.playerHeight,player.playerWidth);
	if(this.areaHeat == true)
	{
		this.active = true
	}
	
	else
	(
		this.active = false
	)
}

bonfire.prototype.draw = function(context)
{
	context.fillStyle = "#ccc"
	context.fillRect(this.PositionX-50,this.PositionY-50,250,250)
	context.drawImage(this.image, this.PositionX, this.PositionY);
}


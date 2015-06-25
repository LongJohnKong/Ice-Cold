var bonfire = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "bonfire.png";
	this.PositionX = x/2;
	this.PositionY = y/2;
}

bonfire.prototype.draw = function(context)
{
	context.drawImage(this.image,-this.image.width,-this.image.height);
}
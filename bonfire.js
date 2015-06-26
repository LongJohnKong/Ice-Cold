var player = new Player (640,480);

var bonfire = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "bonfire.png";
	this.PositionX = x/2;
	this.PositionY = y/2;
}

var circle1 = {radius: 5, x: player.PositionX, y: player.PositionY};
var circle2 = {radius: 2, x: this.PositionX, y: this.PositionY};

var dx = circle1.x - circle2.x;
var dy = circle1.y - circle2.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < circle1.radius + circle2.radius) 
{
    // collision detected!
}

bonfire.prototype.draw = function(context)
{
	context.drawImage(this.image, this.PositionX, this.PositionY);
}
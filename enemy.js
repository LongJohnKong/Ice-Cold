//Enemy Values
// Magnitude is the LENGTH OF A VECTOR
// REMEMBER
var player = new Player();

var Enemy = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "enemy.png";
	
	this.bodyW = 53;
	this.bodyH = 48;
	
	this.visionW = 80;
	this.visionH = 100;
	
	this.VisionOffset = 30;
	
	this.alive = true;
	this.assassinate = false;
	
	this.POS = new Vector2();
	this.POS.set(100,100);
	this.speed = 200;
	this.rot = 0;
	
	this.Points = [];
	
	this.Points[0] = new Vector2();
	this.Points[0].set(100,100);
	
	this.Points[1] = new Vector2();
	this.Points[1].set(100,200);
	
	this.Points[2] = new Vector2();
	this.Points[2].set(200,200);
	
	this.Points[3] = new Vector2();
	this.Points[3].set(200,100);
	
	this.CurrentPointIndex = 0;
};

Enemy.prototype.update = function(DeltaTime)
{
	var Direction = this.Points[this.CurrentPointIndex].copy();
		Direction.subtract(this.POS);
	var Distance = Direction.magnitude();
	
	if (Distance > 1)
	{
		Direction.normalize();
		
		Direction.multiplyScalar(this.speed);
		Direction.multiplyScalar(DeltaTime);
		
		this.POS.add(Direction);
	}
	else
	{
		this.CurrentPointIndex ++;
		if(this.CurrentPointIndex > this.Points.length - 1)
		{
			this.CurrentPointIndex = 0;
		}
	}
}

Enemy.prototype.draw = function(context, DeltaTime)
{	
	context.fillStyle = "#CCC";
	context.fillRect(this.POS.x,this.POS.y,this.bodyW,this.bodyH)
	context.fillRect(player.PositionX,player.PositionY,player.playerWidth,player.playerHeight)

	context.save();
		context.translate(this.POS.x,this.POS.y);
		context.rotate(this.rot);
		context.drawImage(this.image,-this.image.width/2 + 29,-this.image.height/2 + 15);
	context.restore();	
}
//Enemy Values
// Magnitude is the LENGTH OF A VECTOR
// REMEMBER
var Enemy = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "enemy.png";
	
	this.POS = new Vector2();
	this.POS.set(100,100);
	this.speed = 200;
	this.rot = 0;
	
	this.Points = [];
	
	this.Points[0] = new Vector2();
	this.Points[0].set(400,100);
	
	this.Points[1] = new Vector2();
	this.Points[1].set(200,600);
	
	this.Points[2] = new Vector2();
	this.Points[2].set(400,400);
	
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
	context.save();
		context.translate(this.POS.x,this.POS.y);
		context.rotate(this.rot);
		context.drawImage(this.image,-this.image.width/2,-this.image.height/2);
	context.restore();
}
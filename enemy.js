//Enemy Values
// Magnitude is the LENGTH OF A VECTOR
// REMEMBER
//var player = new Player();

var Enemy = function(x,y)
{
	this.image = document.createElement("img");
	this.image.src = "enemy.png";
	
	this.bodyW = 53;
	this.bodyH = 48;
	
	this.visionW = 80;
	this.visionH = 100;
	
	this.VisionOffset = 10;
	
	this.alive = true;
	
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


var Vcollide = Collision();
	
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
	//var Ecollide = Collision(this.POS.x, this.POS.y, this.bodyW,this.bodyH,player.PositionX,player.PositionY,player.PlayerWidth,player.PlayerHeight);
//	
//	if (Ecollide == true)
	//{
//		this.alive = false
//	}
	
}

Enemy.prototype.draw = function(context, DeltaTime)
{
if (this.alive == true)
	context.save();
		context.translate(this.POS.x,this.POS.y);
		context.rotate(this.rot);
		context.drawImage(this.image,-this.image.width/2,-this.image.height/2);
	context.restore();
}
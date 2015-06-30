var Collision = function(x1, y1, w1, h1, x2, y2, w2, h2)
{
	this.X1 = x1;
	this.Y1 = y1;
	this.W1 = w1;
	this.H1 = h1;
	this.X2 = x2;
	this.Y2 = y2;
	this.W2 = w2;
	this.H2 = h2;
	
	this.collided = true
}

Collision.prototype.update = function()
{
	if ( 	this.Y2 + this.H2 < this.Y1 ||
			this.X2 + this.W2 < this.X1 ||
			this.X2 > this.X1 + this.W1 ||
			this.Y2 > this.Y1 + this.H1)
			{
				this.collided = false
			}
}
var Warmth = function()
{
	this.DEFAULT = 100;
}

var Bonfire = new bonfire();

Warmth.prototype.update = function(deltatime)
{
	if(player.alive == true && bonfire.active == true)
	{
		this.DEFAULT += deltatime * 2
	}
	
	else
	
	if(player.alive == true && bonfire.active == false)
	{
		this.DEFAULT -= deltatime
	}
	
	if(this.DEFAULT < 0)
	{
		player.alive = false;
	}
}

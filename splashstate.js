var SplashState = function()
{
	this.prototype = BaseState;
	this.TimeSinceStart = 0;
}

SplashState.prototype.load = function()
{

}

SplashState.prototype.unload = function()
{

}

SplashState.prototype.update = function(dt)
{
	this.TimeSinceStart += dt;
	if (this.TimeSinceStart > 3.0)
	{
		SceneManager.pop();
	}
}

SplashState.prototype.draw = function(dt)
{
	context.fillStyle = "#aaa";		
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.font = "25pt Courier New";
	context.fillStyle = "#FF0";
	//var width = context.measureText( "Ice Cold").width;
	context.fillText("Ice Cold", CANVASWIDTH/2, CANVASHEIGHT/2);
}
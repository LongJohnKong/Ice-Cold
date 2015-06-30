var deathBG = document.createElement ("img")
deathBG.src = "gameover.png";

var warmth = new Warmth ();
var player = new Player ();

var GameOverState = function()
{
	this.prototype = BaseState;
}

GameOverState.prototype.load = function()
{

}

GameOverState.prototype.unload = function()
{

}

GameOverState.prototype.update = function(dt)
{

}

GameOverState.prototype.draw = function(dt)
{
	if (player.alive == false)
	{
		context.drawImage( deathBG, 0, 0);
	}
}
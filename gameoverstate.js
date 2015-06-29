var deathBG = document.createElement ("img")
deathBG.src = "gameover.png";

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
	context.drawImage( deathBG,
								x * 0, y * 0);
}
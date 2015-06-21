//DEMO

var player = new Player(640,480);
var enemy = new Enemy(640,480);
//var mouse = new Mouse();


function DEMONSTRATION(deltatime)
{
	
	console.log("DEMO LOADED")
	context.fillStyle = "#000000"
	context.font = "18px Arial"
	context.fillText("DEBUG CONSOLE",CANVASWIDTH/2, CANVASHEIGHT/8)
	context.fillText("PLAYER" + player.PositionX + " " + player.PositionY,CANVASWIDTH/2, CANVASHEIGHT/5)
	context.fillText("ENEMY" + enemy.PositionX + " " + enemy.PositionY,CANVASWIDTH/2, CANVASHEIGHT/6)
	enemy.draw(context)
	enemy.update(deltatime)
	player.draw(context)
	player.update(deltatime)
}
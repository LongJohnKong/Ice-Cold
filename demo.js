//DEMO

var player = new Player(640,480);
var enemy = new Enemy(640,480);
//var mouse = new Mouse();
var Grass = document.createElement("img");

Grass.src = "snow.png";

var Background = [];

for (var y = 0; y < 15; y++)
{
	Background[y] = [];
	for (var x = 0; x < 20; x++)
	{
		Background[y][x] = Grass;
	}
}
function DEMONSTRATION(deltatime)
{

for (var y = 0; y < 15; y++)
	{
		for (var x = 0; x < 20; x++)
		{
			context.drawImage( Background[y][x],
							   x * 32, y * 32);
		}
	}
	console.log("DEMO LOADED")
	context.fillStyle = "#000000"
	context.font = "18px Arial"
	context.fillText("DEBUG CONSOLE",CANVASWIDTH/2, CANVASHEIGHT/8)
	context.fillText("PLAYER" + player.PositionX + " " + player.PositionY,CANVASWIDTH/2, CANVASHEIGHT/5)
	context.fillText("ENEMY" + enemy.POS.x + " " + enemy.POS.y,CANVASWIDTH/2, CANVASHEIGHT/6)
	enemy.draw(context)
	enemy.update(deltatime)
	player.draw(context)
	player.update(deltatime)
}
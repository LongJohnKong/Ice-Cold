//DEMO
var player = new Player(400,400);
var enemy = new Enemy(640,480);
var bonfire = new bonfire(640,480);
var warmth = new Warmth()
var fur = new fur(700,275)
//var mouse = new Mouse();
var Grass = document.createElement("img");
var gameover = new GameOverState ();

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
							   x * 128, y * 128);
		}
	}
	console.log("Kye Smells pizza")
	console.log("Maroun Smells")
	console.log("DEMO LOADED");
	context.fillStyle = "#000000";
	context.font = "18px Arial";
	context.fillText("DEBUG CONSOLE",CANVASWIDTH/2, CANVASHEIGHT/8);
	context.fillText(player.rotation + " " + player.PositionX + " " + player.PositionY,CANVASWIDTH/2, CANVASHEIGHT/5+20);
	context.fillText("warmth" +" "+  warmth.DEFAULT, CANVASWIDTH/2, CANVASHEIGHT/5+40 );
	bonfire.update(deltatime);
	warmth.update(deltatime);
	enemy.draw(context);
	enemy.update(deltatime);
	player.update(deltatime);
	fur.update(deltatime);
	gameover.update(deltatime);
	drawMap(context);
	SceneManager.update(deltatime);
	fur.draw(context);
	bonfire.draw(context);
	player.draw(context);
	gameover.draw(context);
	SceneManager.draw();
}
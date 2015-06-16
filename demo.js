//DEMO

var player = new Player();
var Grass = document.createElement("img");

Grass.src = "grass.png";

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

	console.log("DEMO LOADED")
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
		for (var y = 0; y < 15; y++)
	{
		for (var x = 0; x < 20; x++)
		{
			context.drawImage( Background[y][x],
							   x * 32, y * 32);
		}
	}
	player.draw(context)
	player.update(deltatime)
}


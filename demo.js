//DEMO

var player = new Player();

function DEMONSTRATION(deltatime)
{

	console.log("DEMO LOADED")
	context.fillStyle = "#ccc";
	context.fillRect(0, 0, canvas.width, canvas.height);
	player.draw(context)
	player.update(deltatime)
}

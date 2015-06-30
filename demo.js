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

function collision(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if ( 	y2 + h2 < y1 ||
			x2 + w2 < x1 ||
			x2 > x1 + w1 ||
			y2 > y1 + h1)
		return false;
	return true;
}

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

var CollideEnemy = collision(player.PositionX, player.PositionY, player.playerWidth,player.playerHeight,enemy.POS.x,enemy.POS.y,enemy.bodyW,enemy.bodyH)

if (CollideEnemy == true)
{
	player.alive = false
}


for (var y = 0; y < 15; y++)
	{
		for (var x = 0; x < 20; x++)
		{
			context.drawImage( Background[y][x],
							   x * 128, y * 128);
		}
	}
	warmth.update(deltatime);
	drawMap(context);
	enemy.draw(context);
	enemy.update(deltatime);
	SceneManager.update(deltatime);
	SceneManager.draw();
	player.draw(context);
	player.update(deltatime);
	fur.update(deltatime);
	fur.draw(context);
	context.fillStyle = "#000";
	context.font = "30px Arial";
	context.fillText( "Warmth:"+ "  " + Math.floor(warmth.DEFAULT),200 ,50 );
	gameover.update(deltatime);
	gameover.draw(context);
	
}
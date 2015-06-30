//DEMO
var player = new Player(400,400);
var enemy = new Enemy(640,480);
var bonfire = new bonfire(640,480);
var warmth = new Warmth()
var fur = new fur(700,275)
var Grass = document.createElement("img");
var gameover = new GameOverState ();
var gamewin = new GameState ();

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

var RestartTimer = 0;

function DEMONSTRATION(deltatime)
{

var CollideEnemy = collision(player.PositionX, player.PositionY, player.playerWidth,player.playerHeight,fur.PosX, fur.PosY, fur.Width,fur.Height)

if (CollideEnemy == true)
{
	player.win = true
}


for (var y = 0; y < 15; y++)
	{
		for (var x = 0; x < 20; x++)
		{
			context.drawImage( Background[y][x],
							   x * 128, y * 128);
		}
	}

	if(player.alive == false || player.win == true)
	{
		location.reload()
	}
	
	////if(RestartTimer == 15)
	//{
	//	
	//}
	
	warmth.update(deltatime);
	drawMap(context);
	player.draw(context);
	player.update(deltatime);
	fur.update(deltatime);
	fur.draw(context);
	context.fillStyle = "#000";
	context.font = "30px Arial";
	context.fillText( "Warmth:"+ "  " + Math.floor(warmth.DEFAULT),200 ,50 );
	SceneManager.update(deltatime);
	SceneManager.draw();
	gamewin.update(deltatime);
	gamewin.draw(context);
	gameover.update(deltatime);
	gameover.draw(context);
	
}
var level1 = 
{
//Level code go here <3
}
var tileset = document.createElement("img");
tileset.src = level1.tilesets[0].image;

var LAYER_COUNT = level1.layers.length;
var TILESET_COUNT_X = 14;
var TILESET_COUNT_Y = 14;
var TILESET_PADDING = 2;

var MAP = {}
 
MAP.tw = level1.layers[0].width;
MAP.th = level1.layers[0].height;

var TILE = level1.tilewidth;
var TILESET_TILE = level1.tilesets[0].tilewidth;
var TILESET_SPACING = level1.tilesets[0].spacing;
var TILESET_MARGIN = level1.tilesets[0].margin;

var LAYER_BACKGROUND = 0;
var LAYER_PLATFORMS = 1;
var LAYER_LADDERS = 2;

var worldOffsetX = 0;

function drawMap()
{
	var maxTiles = Math.floor(SCREEN_WIDTH / TILE) + 2;

	var tileX= pixeltotile(player.position.x);
	
	var offsetX = TILE + Math.floor(player.position.x % TILE);

	var startX = tileX - Math.floor(maxTiles / 2);
	
	if(startX < -1)
	{
		startX = 0;
		
		offsetX = 0;
	}
	
	if(startX > MAP.tw - maxTiles - 1)
	{
		startX = MAP.tw - maxTiles ;
		offsetX = TILE;
	}
	
	worldOffsetX = startX * TILE + offsetX;
	
	
	//loops through all the different layers
	for (var layerindex = 0; layerindex < LAYER_COUNT; layerindex++)
	{
		var itemindex = 0;
		
		for (var y = 0; y < level1.layers[layerindex].height; y++)
		{		
		
			itemindex = y * level1.layers[layerindex].width + startX;
			for (var x = startX; x < startX + maxTiles; x++)
			{
			
				if (level1.layers[layerindex].data[itemindex] != 0)
				{
					var tileindex = level1.layers[layerindex].data[itemindex];
					
					var sx = TILESET_MARGIN +
						(tileindex % TILESET_COUNT_X - 1) * (TILESET_TILE + TILESET_SPACING);
						
					var sy = TILESET_MARGIN +
						(Math.floor(tileindex / TILESET_COUNT_Y)) * (TILESET_TILE + TILESET_SPACING);
						
					context.drawImage(tileset, 
									sx, sy,
									TILESET_TILE, TILESET_TILE, 
				/* change ->*/		(x - startX)*TILE - offsetX, (y-1)*TILE,
									TILESET_TILE, TILESET_TILE);
				}
			itemindex++;
			}
		}
	}
};
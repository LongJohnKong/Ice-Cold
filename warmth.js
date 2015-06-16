var count = 100;

var counter = setInterval(timer, 597); //1000 will  run it every 1 second

function timer()
{
  count = count - 1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }
}
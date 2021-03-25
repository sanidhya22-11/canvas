canvas-
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


rect()
ctx.beginpath();
ctx.strokeStyle = "grey";
ctx.linewidth = 4;
ctx.rect (150,140,200);
ctx.stroke();

circle();
ctx= canvas.getContext("2d"); color = "red";
  ctx.beginPath(); ctx.strokeStyle = color;
   ctx.lineWidth = 2; ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
    ctx.stroke();
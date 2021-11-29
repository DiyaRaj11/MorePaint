var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="Pink"
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=2
ctx.arc(200,200,40,0,2 *Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=2
ctx.arc(300,200,40,0,2 *Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=2
ctx.arc(400,200,40,0,2 *Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=2
ctx.arc(250,250,40,0,2 *Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=2
ctx.arc(350,250,40,0,2 *Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    color=document.getElementById("color").value
mousex=e.clientX - canvas.offsetLeft;
mousey=e.clientY - canvas.offsetTop;
circle(mousex,mousey)
}
function circle(mousex,mousey){
 ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(mousex,mousey,40,0,2 *Math.PI)
ctx.stroke()
}
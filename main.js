var mouseevent="";
var lastpositionofx;
var lastpositionofy;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouseevent="mouseDown";

}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    currentpositionofx=e.clientX - canvas.offsetLeft;
    currentpositionofy=e.clientY - canvas.offsetTop;
    if(mouseevent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=1;
        console.log("last position of x="+lastpositionofx+ "last position of y="+lastpositionofy);
        ctx.moveTo(lastpositionofx,lastpositionofy);
        console.log("current position of x="+currentpositionofx+  "current position of y="+currentpositionofy);
        ctx.lineTo(currentpositionofx,currentpositionofy);
        ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;


}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseevent="mouseUp";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseevent="mouseLeave";

}


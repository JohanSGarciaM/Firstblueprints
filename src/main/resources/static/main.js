$(function(){

    $("button").click(function(){
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        console.log(canvas.getBoundingClientRect().left);
        console.log(canvas.getBoundingClientRect().top);
        ctx.lineWidth=2;
        ctx.strokeStyle="black";
        ctx.beginPath();
        ctx.moveTo(0,0)
        
        /*ctx.lineTo(canvas.getBoundingClientRect().left-500,canvas.getBoundingClientRect().top);*/
        ctx.lineTo(150,75);
        ctx.stroke();
    })
});
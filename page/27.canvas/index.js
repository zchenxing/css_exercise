var canvas = document.getElementById('bar-Graph');
canvas.setAttribute('width', document.body.clientWidth - 10);
canvas.setAttribute('height', document.body.clientHeight - 10);

var originX = 0;
var originY = canvas.height;
var bWidth = canvas.width;
var bHeight = canvas.height;

var ctx = canvas.getContext('2d');


drawREC(ctx)

/**
 * 画矩形
 */
function drawREC(ctx) {
    ctx.fillStyle = 'pink'; // 填充颜色
    ctx.strokeStyle = '#cc0000'; // 边框颜色
    ctx.fillRect(10, 20, 100, 100);
    ctx.strokeRect(120, 20, 100, 100);
}


drawCircle(ctx, 170, 70, 50)

/**
 * 圆形
 * arc(x, y, r, sAngle, eAngle, counterclockwise);
 * arc(圆心x，圆心y，圆半径，起始角弧度，结束角弧度，逆时针(可选))
 */
function drawCircle(ctx, centerX, centerY, R) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, R, 0, Math.PI * 2, true);
    ctx.closePath();
    // ctx.fillStyle = '#00dddd';
    ctx.fill();
}



drawSemicircle(ctx)

function drawSemicircle(ctx) {

    ctx.beginPath();
    ctx.arc(60, 120, 50, 0, Math.PI);
    ctx.strokeStyle = 'red';
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(170, 130, 50, 0, Math.PI);
    ctx.strokeStyle = '#3ed';
    // 没有closePath()
    ctx.stroke();
}



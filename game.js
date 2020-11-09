var canvas = null,
    ctx = null;

function paint(ctx) {
    ctx.strokeStyle = '#000';
    ctx.strokeRect(50, 50, 100, 60);
} 

function init() {
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
paint(ctx);
} 

window.addEventListener('load', init, false);
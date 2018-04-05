let canvas = document.getElementById('canvasBox');
console.log(canvas)
canvas2d = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pic = new Image();
pic.src="rainbow.png"
pic.addEventListener("load", troutFunc)

function troutFunc() {
	
	for(i=0; i < 10; i++) {
	y = Math.random() * 720	
	canvas2d.drawImage(pic,0,y,100,100)
	}
}
 
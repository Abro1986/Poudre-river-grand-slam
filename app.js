let canvas = document.getElementById('canvasBox');
console.log(canvas)
canvas2d = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fly = {
    x: innerWidth ,
    y: innerHeight
}

let pic2 = new Image();
let pic = new Image();
pic.src="rainbow.png"
pic2.src="parachute.png"
pic.addEventListener("load", addFish)
canvas.addEventListener("click", function(e) {
    fly.x = event.clientX -50;
    fly.y = event.clientY -50;
    console.log(fly)
})

const mf = 5;
const fish = [];

for(let i = 0; i < mf; i++) 
{
    fish.push({
      pic: pic,
      x: Math.random() * 100,
      y: Math.random() * (window.innerHeight - 40),
      width: 60,
      height: 60,
    })
};

console.log(fish)

function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return  Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}



function addFish() {

  canvas2d.clearRect(0, 0, innerWidth, innerHeight);
     //canvas2d.beginPath();

  for (let i = 0; i < mf; i++) {
        let f = fish[i]
        canvas2d.drawImage(f.pic, f.x, f.y, f.width, f.height);

    }
    canvas2d.drawImage(pic2, fly.x, fly.y, 40, 40);
    if (distance(fish[1].x, fish[1].y, fly.x, fly.y) < 40) {
      fish[4].pic = null
      console.log(fish)
    }
}

function moveFish() {

  for(let i = 0; i < mf; i++) {
    let f = fish[i];

    f.x += (Math.random() * 10);
  }
}

setInterval(function() {moveFish()}, 100)
setInterval(function() {addFish()}, 50)




    // function troutFunc() {
	
	
    // 	setInterval(function() {y = Math.random() * window.innerHeight;	
    // 	canvas2d.drawImage(pic,0,y,100,100)}, 2000)
	
    // }

  //function moveTrout() {
  //  	x += dx
  // 	setInterval( function(){requestAnimationFrame(moveTrout)}, 2000);
  // 	canvas2d.clearRect(0, 0, innerWidth, innerHeight);
  // 	y = Math.random() * 100
		
  // 	canvas2d.drawImage(pic,0,y,100,100)
  // }

//setInterval(function() { moveTrout()}, 1000)


// setInterval(function() {	
// 	canvas2d.drawImage(pic,x,y,100,100)}, 4000)

//function troutFunc()



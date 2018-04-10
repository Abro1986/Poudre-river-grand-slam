let canvas = document.getElementById('canvasBox');
let canvas2d = canvas.getContext('2d')
let parachute = document.getElementById('parachute')
let wolly = document.getElementById('wolly')
let ehc = document.getElementById('ehc')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
lastFish = -1;
let cutty = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/yellowstone.png"
let brown = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/brown.png"
let rainbow = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/rainbow.png"
let brook = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/brook.png"
let wollySrc = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/wolly.png"
let paraSrc = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/parachute.png"
let ehcSrc = "file:///Users/andrewbroestl/Desktop/WDI-Working-directory/homework_week_3/Project1/Poudre-river-grand-slam/EHC.png"
const fly = [];
const maxFly = 15;
//let collision = distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) 
//let randomImg = ["rainbow.png", "brook.png"]

// let fly = {
//     x: innerWidth ,
//     y: innerHeight
// }

for(i = 0; i < maxFly; i++) {
    fly.push({
      pic2: new Image(),
      x: undefined,
      y: undefined,
    })
}

let pic2 = new Image();
let pic = new Image();
//pic.src = "rainbow.png"
//pic2.src= parachute.src
 
  
pic.addEventListener("load", addFish)

parachute.addEventListener("click", function(e) {

  pic2.src = this.src
})

wolly.addEventListener('click', function(e) {

  pic2.src = wolly.src
})

ehc.addEventListener('click', function(e) {
  
  pic2.src = ehc.src
})

canvas.addEventListener("click", function(e) {
  
  
       
    fly[0].x = event.clientX -20;
    fly[0].y = event.clientY -30;
    console.log(fly)
});


const mf = 15;
const fish = [];


function randomFish() {

  let randomNum = Math.random()
  let randomNum2 = Math.random() * 2

  let trout = {
      pic: new Image(),
       
      x: 100,
      y: (Math.random() + 500) + (Math.random() * 250),
      width: 130,
      height: 75,
  }

    //let randomNum = Math.random()

  if (randomNum2 < 0.50) {     
    trout.pic.src = "rainbow.png";
    } else if (randomNum2 > 0.50 && randomNum2 < 1) {      
    trout.pic.src = "brook.png";
    } else if (randomNum2 > 1 && randomNum2 < 1.50) {
    trout.pic.src = "brown.png";
    } else {
    trout.pic.src = "yellowstone.png"
    }
    
   fish.push(trout);
}



function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return  Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

function brownEat() {

  //canvas2d.drawImage(pic2, fly[0].x, fly[0].y, 40, 40);
    
  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 60) && (fish[i].pic.src === brown) && (pic2.src === wollySrc)) {
    fish.splice(i, 1);
    fly.splice(0, 1);
    pic2 = new Image()
    }
  }
}

function rainbowEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 60) && (fish[i].pic.src === rainbow) && (pic2.src === paraSrc)) {
    fish.splice(i, 1);
    fly.splice(0, 1);
    pic2 = new Image()
    }
  }
}

function brookEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 60) && (fish[i].pic.src === brook) && (pic2.src === ehcSrc)) {
    fish.splice(i, 1);
    fly.splice(0, 1);
    pic2 = new Image()
    }
  }
}

function cuttyEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 60) && (fish[i].pic.src === cutty) && (pic2.src === paraSrc)) {
    fish.splice(i, 1);
    fly.splice(0, 1);
    pic2 = new Image()
    }
  }
}

function addFish() {

  

  let time = Date.now();

  if(time > (lastFish + 2000)) {
     lastFish = time;
     randomFish();
  }

  canvas2d.clearRect(0, 0, innerWidth, innerHeight);
     //canvas2d.beginPath();


  requestAnimationFrame(addFish);



    for (let i = 0; i < fish.length; i++) {
          let trout = fish[i];
          canvas2d.drawImage(trout.pic, trout.x, trout.y, trout.width, trout.height);
         //canvas2d.drawImage(f.pic, f.x, f.y, f.width, f.height);
         
    }
    canvas2d.drawImage(pic2, fly[0].x, fly[0].y, 80, 80);
    // for (i = 0; i < fish.length; i++) {

    //  if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 60) && (fish[i].pic.src === cutty) && (pic2.src === paraSrc || wollySrc)) {
    //   fish.splice(i, 1);
    //   fly.splice(0, 1);
    //   pic2 = new Image()

      
    //  }
    //}
    brownEat()
    rainbowEat()
    brookEat()
    cuttyEat()
      
}

function moveFish() {

  for(let i = 0; i < fish.length; i++) {
    let f = fish[i];

    f.x += (Math.random() * 5);

     if (f.x > canvas.width) {
       // fish[i] = {
       // pic: pic,
       // x: Math.random() * 100,
       // y: Math.random() * (window.innerHeight - 100),
       // width: 30,
       // height: 30,
       // }
       fish.splice(0, 1);

      
     }
  }
}



setInterval(function() {moveFish()}, 20)
//setInterval(function() {addFish()}, 20)
addFish()


 



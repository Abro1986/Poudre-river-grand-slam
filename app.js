//get html elments by their Id
let canvas = document.getElementById('canvasBox');
let canvas2d = canvas.getContext('2d')
let parachute = document.getElementById('parachute')
let wolly = document.getElementById('wolly')
let ehc = document.getElementById('ehc')
let bag = document.getElementById('fishbag')
let timer = document.getElementById('countdown')

//set the size of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//the last fish created one second ago
let lastFish = -1;

//setting varibles for the image srcs
let cutty = "yellowstone.png"
let brown = "brown.png"
let rainbow = "rainbow.png"
let brook = "brook.png"
let wollySrc = "wolly.png"
let paraSrc = "parachute.png"
let ehcSrc = "EHC.png"

//setting empty arrays and and the max amount of flys in the array
let fishBag = [];
let fishCount = 0
let fly = [];
let maxFly = 40;
let mf = 15;
let fish = [];

//time to play on the counter
let sec = 60

// create objects in the fly array
for(i = 0; i < maxFly; i++) {
    fly.push({
      pic2: new Image(),
      x: undefined,
      y: undefined,
    })
  }
 
//set the pic varible of the fish and fly objects to images
let pic2 = new Image();
let pic = new Image();

 
// set event listeners on load of page to load the images and start timer, this is the same as a $(document).ready in jQuery 
pic.addEventListener("load", addFish)

window.addEventListener("load", function() {
   
  setInterval(function() {
  timer.innerHTML = sec--}, 1000)
})

//set up event listeners for on click of fly buttons to assign value to the fly pic
parachute.addEventListener("click", function(e) {
  pic2.src = parachute.src
})

wolly.addEventListener('click', function(e) {
  pic2.src = wolly.src
})

ehc.addEventListener('click', function(e) {
  pic2.src = ehc.src
})

//set the x, and y variables of the fly object on click within canvas
canvas.addEventListener("click", function(e) {         
  fly[0].x = event.clientX -20;
  fly[0].y = event.clientY -30;
});




// function to set random attributes to new fish as objects in the fish array
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
    trout.pic.src = rainbow;
    } else if (randomNum2 > 0.50 && randomNum2 < 1) {      
    trout.pic.src = brook;
    } else if (randomNum2 > 1 && randomNum2 < 1.50) {
    trout.pic.src = brown;
    } else {
    trout.pic.src = cutty;
    }
    
   fish.push(trout);
}


// function to check distance between two objects.
function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return  Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

// 4 functions to check if fly is the one that corresponding fish wants to eat. I realize there is room for
// refactoring here and could propably be one function. could also use some varible assigning.
function brownEat() {
    
  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 40) && (fish[i].pic.src.split("/").pop() === brown) && (pic2.src.split("/").pop() === wollySrc)) {
    //fish.splice(i, 1);
    fish[i].pic = new Image();
    fishBag.push(fish[i]);
    fly.splice(0, 1);
    pic2 = new Image()
    
    fishCount++
    bag.innerHTML = ("fish count: " + fishCount )
    }
  }
}

function rainbowEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 40) && (fish[i].pic.src.split("/").pop() === rainbow) && (pic2.src.split("/").pop() === paraSrc)) {
    fish[i].pic = new Image();
    fishBag.push(fish[i]);
    fly.splice(0, 1);
    pic2 = new Image()
    fishCount++
    bag.innerHTML = ("fish count: " + fishCount )
    }
  }
}

function brookEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 40) && (fish[i].pic.src.split("/").pop() === brook) && (pic2.src.split("/").pop() === ehcSrc)) {
    fish[i].pic = new Image();
    fishBag.push(fish[i]);
    fly.splice(0, 1);
    pic2 = new Image()
    fishCount++
    bag.innerHTML = ("fish count: " + fishCount )
    }
  }
}

function cuttyEat() {

  for (i = 0; i < fish.length; i++) {

    if ((distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 40) && (fish[i].pic.src.split("/").pop() === cutty) && (pic2.src.split("/").pop() === paraSrc)) {
    fish[i].pic = new Image();
    fishBag.push(fish[i]);
    fly.splice(0, 1);
    pic2 = new Image()
    fishCount++
    bag.innerHTML = ("fish count: " + fishCount )
    }
  }
}

// function that gives the player their score at the end of 60 seconds then resets the game
function checkScore() {
  if (sec <= 0) {
    alert("You caught " + fishCount + " trout")
    sec = 60

  }
}

// recursive infinite function that erases fish and redraws them in a new position. It also is the collision 
// detection for the whole game
function addFish() {

  let time = Date.now();

    if(time > (lastFish + 2000)) {
      lastFish = time;
      randomFish();
  }

  canvas2d.clearRect(0, 0, innerWidth, innerHeight);     
  requestAnimationFrame(addFish);


  for (let i = 0; i < fish.length; i++) {
      let trout = fish[i];
      canvas2d.drawImage(trout.pic, trout.x, trout.y, trout.width, trout.height);
         //canvas2d.drawImage(f.pic, f.x, f.y, f.width, f.height);         
  }
    
  canvas2d.drawImage(pic2, fly[0].x, fly[0].y, 40, 40);
    

  brownEat()
  rainbowEat()
  brookEat()
  cuttyEat()
  checkScore()      
}

//sets the speed for the fish
function moveFish() {

  for(let i = 0; i < fish.length; i++) {
    let f = fish[i];

    f.x += (Math.random() * 5);

     if (f.x > canvas.width) {
       
       fish.splice(0, 1);

      
     }
  }
}






//function calls
setInterval(function() {moveFish()}, 20)
addFish()



 



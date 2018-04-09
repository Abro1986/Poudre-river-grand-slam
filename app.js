let canvas = document.getElementById('canvasBox');
console.log(canvas)
canvas2d = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
lastFish = -1;

const fly = [];
const maxFly = 15;
//let randomImg = ["rainbow.png", "brook.png"]

// let fly = {
//     x: innerWidth ,
//     y: innerHeight
// }

for(i = 0; i < maxFly; i++) {
    fly.push({
      x: undefined,
      y: undefined,
    })
}

let pic2 = new Image();
let pic = new Image();
pic.src = "rainbow.png"
pic2.src="parachute.png"
 
  
pic.addEventListener("load", addFish)

canvas.addEventListener("click", function(e) {
  
       
    fly[0].x = event.clientX -50;
    fly[0].y = event.clientY -50;
    console.log(fly)
});

const mf = 15;
const fish = [];


 //  for(let i = 0; i < mf; i++) {
 //    randomFish()
 //  }
 // // {
 //     fish.push({
 //       pic: pic,
       

 //       // if (Math.random() < 0.50) {
 //       //  pic.src = "rainbow.png";
 //       //  } else {
 //       //  pic.src = "brook.png";
 //       //  },

 //       x: Math.random() * 100,
 //       y: Math.random() * (window.innerHeight - 100),
 //       width: 60,
 //       height: 60,
 //     })

 // };

 function randomFish() {

    let trout = {
       pic: new Image(),
       
       x: Math.random() * 100,
       y: Math.random() * (window.innerHeight - 100),
       width: 75,
       height: 75,
    }

   let randomNum = Math.random()

   if (randomNum < 0.50) {
      console.log("rainbow")
     trout.pic.src = "rainbow.png";
    } else {
      console.log("brook")
     trout.pic.src = "brook.png";
    }

    
    
   fish.push(trout);
  }



function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return  Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
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
    canvas2d.drawImage(pic2, fly[0].x, fly[0].y, 40, 40);
    for (i = 0; i < fish.length; i++) {

     if (distance(fish[i].x, fish[i].y, fly[0].x, fly[0].y) < 40) {
      fish.splice(i, 1);
      fly.splice(0, 1);

      
      }
    }
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



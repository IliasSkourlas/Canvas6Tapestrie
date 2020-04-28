let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c2 = canvas.getContext('2d');
//let.c = canvas.getContext('2d');


let plusOrMinus = Math.random() < 0.5 ? -1 : 1; 
let xMove = 800;
let yMove = 450;
let counterColor = 0;
let counterRadius = 0;
let counterSpeed = 0;
let color = "black";
let speed = 10; //* plusOrMinus;
let speedY = 10;
let radius = 400/80;
let makeLarger = radius / 2;
let colors = ["black", "white"];
let speeds = [10, 1,3000,5];
let radiusis = [radius,radius + makeLarger,radius,radius + makeLarger * 2,radius,radius];

// Speed Control
setInterval(function(){
    counterSpeed += 1;
    counterSpeed = counterSpeed % speeds.length;

    speed = speeds[counterSpeed];
    
}, 4000);

// Color Control
setInterval(function(){
    counterColor += 1;
    counterColor = counterColor % colors.length;
    color = colors[counterColor];
    
},4000);


//Radius Control
setInterval(function(){
    counterRadius += 1;
    counterRadius = counterRadius % radiusis.length;

    radius = radiusis[counterRadius];
    
}, 2000);


document.addEventListener('mousemove', xyMouseColor );
function xyMouseColor(obj) {
    let yAxis = obj.y; 
    if (yAxis< 42 || yAxis>840) {
        // counterColor += 1;
        // counterColor = counterColor % colors.length;
        // color = colors[counterColor];
        // color = "white";
    } 
    else {
        // counterColor += 1;
        // counterColor = counterColor % colors.length;
        // color = colors[counterColor];
        // color = "black";
        
        animate();
    } 
    console.log(yAxis);
}

animate();
function animate(){
    requestAnimationFrame(animate);
    //c2.clearRect(0, 0, innerWidth, innerHeight);

    let randomRadius =Math.floor(Math.random() * radius) ;
    c2.beginPath();
    c2.arc(xMove, yMove, randomRadius , 0, Math.PI * 2, false);
    c2.strokeStyle = color;
    c2.stroke();
    if (xMove + (randomRadius - 100) > innerWidth || xMove - (randomRadius - 100) < 0){
        speed  = - speed;
    } 
    if (yMove + (randomRadius - 100) > innerHeight || yMove - (randomRadius - 100) < 0){
        speedY  = - speedY;
    } 
    
    xMove += speed;
  
    yMove += speedY- 0.0001;//speedY;
   
    
}
animate1();










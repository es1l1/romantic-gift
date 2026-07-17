const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spin");
const result = document.getElementById("result");


const rewards = [
"💖 رسالة حب",
"🌹 وردة رقمية",
"😘 قبلة",
"⭐ +10 نقاط",
"🎁 مفاجأة",
"❤️ لحظة جميلة"
];


let angle = 0;
let spinning = false;


function drawWheel(){

let center = 160;
let radius = 150;

let slice = (Math.PI * 2) / rewards.length;


ctx.clearRect(0,0,320,320);


for(let i=0;i<rewards.length;i++){

ctx.beginPath();

ctx.moveTo(center,center);

ctx.arc(
center,
center,
radius,
angle+i*slice,
angle+(i+1)*slice
);

ctx.fillStyle =
i%2===0 ? "#ff4f95" : "#ff9ac6";

ctx.fill();


ctx.save();

ctx.translate(center,center);

ctx.rotate(
angle+i*slice+slice/2
);

ctx.fillStyle="white";
ctx.font="14px Tahoma";

ctx.textAlign="right";

ctx.fillText(
rewards[i],
120,
5
);

ctx.restore();

}

}


drawWheel();


spinBtn.onclick=function(){

if(spinning) return;

spinning=true;


let speed =
Math.random()*20+20;


let duration=3000;

let start=Date.now();


function animate(){

let time=Date.now()-start;


angle += speed*0.03;

speed*=0.98;


drawWheel();


if(time<duration){

requestAnimationFrame(animate);

}else{

spinning=false;


let index =
Math.floor(
(Math.random()*rewards.length)
);


result.innerHTML =
"🎉 حصلت على: "+rewards[index];


if(typeof addPoints==="function"){
addPoints(10);
}

}

}


animate();

}

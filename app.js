let points = localStorage.getItem("lovePoints") || 0;


function addPoints(number){

points = Number(points)+number;

localStorage.setItem(
"lovePoints",
points
);

updatePoints();

}



function updatePoints(){

let box=document.getElementById("points");

if(box){

box.innerHTML=
"❤️ نقاط الحب: "+points;

}

}



window.onload=function(){

updatePoints();

}

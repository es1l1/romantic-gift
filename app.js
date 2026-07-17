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
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart-fall';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // سرعة السقوط
    document.body.appendChild(heart);

    // حذف القلب بعد انتهاء الحركة لتنظيف الذاكرة
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// إنشاء قلب جديد كل 800 مللي ثانية
setInterval(createHeart, 800);
window.onload=function(){

updatePoints();

}

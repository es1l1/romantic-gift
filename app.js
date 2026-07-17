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
// app.js

// دالة لزيادة النقاط
function addPoints(amount) {
    let currentPoints = parseInt(localStorage.getItem('lovePoints')) || 0;
    currentPoints += amount;
    localStorage.setItem('lovePoints', currentPoints);
    updatePointsDisplay();
}

// دالة لتحديث عرض النقاط في الصفحة
function updatePointsDisplay() {
    const pointsEl = document.getElementById('points');
    if (pointsEl) {
        const points = localStorage.getItem('lovePoints') || 0;
        pointsEl.innerText = `نقاط الحب: ${points} ❤️`;
    }
}

// تحديث النقاط عند تحميل أي صفحة
window.onload = updatePointsDisplay;

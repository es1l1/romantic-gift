// إدارة النقاط
function updatePoints() {
    const points = localStorage.getItem("lovePoints") || 0;
    const box = document.getElementById("points");
    if (box) box.innerText = "❤️ نقاط الحب: " + points;
}

function addPoints(amount) {
    let currentPoints = parseInt(localStorage.getItem("lovePoints")) || 0;
    currentPoints += amount;
    localStorage.setItem("lovePoints", currentPoints);
    updatePoints();
}

// القلوب المتساقطة
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart-fall';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 10000);
}

window.onload = function() {
    updatePoints();
    setInterval(createHeart, 800);
};

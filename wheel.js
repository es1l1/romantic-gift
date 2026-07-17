// wheel.js
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin');
const resultDiv = document.getElementById('result');
const ctx = wheel.getContext('2d');

// إعدادات العجلة
const segments = ["رسالة حب 💌", "قبلة 💋", "وردة 🌹", "هدية 🎁", "لحظة جميلة 😍", "نقطة إضافية ✨"];
const colors = ["#ff4f95", "#ff8fcf", "#ffb7d5", "#ff4f95", "#ff8fcf", "#ffb7d5"];

function drawWheel() {
    const arc = Math.PI * 2 / segments.length;
    segments.forEach((segment, i) => {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(160, 160);
        ctx.arc(160, 160, 150, i * arc, (i + 1) * arc);
        ctx.lineTo(160, 160);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(160 + Math.cos(i * arc + arc/2) * 100, 160 + Math.sin(i * arc + arc/2) * 100);
        ctx.rotate(i * arc + arc/2 + Math.PI/2);
        ctx.fillText(segment, -ctx.measureText(segment).width/2, 0);
        ctx.restore();
    });
}

drawWheel();

spinBtn.addEventListener('click', () => {
    const randomAngle = Math.floor(Math.random() * 3600) + 360;
    wheel.style.transition = "transform 4s ease-out";
    wheel.style.transform = `rotate(${randomAngle}deg)`;
    
    setTimeout(() => {
        resultDiv.innerText = "مبروك! حصلت على: " + segments[Math.floor(Math.random() * segments.length)];
    }, 4000);
});

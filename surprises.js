// surprises.js
const surprises = [
    "✨ أنت أجمل ما حدث في حياتي اليوم!",
    "💌 أحبك أكثر مما تتخيل.. اليوم هو يومنا!",
    "🌹 باقة ورد افتراضية لقلبك الجميل.",
    "🥰 ضحكتك هي عالمي الخاص.",
    "💍 أنتِ/أنتَ كل شيء بالنسبة لي."
];

const gifts = document.querySelectorAll('.gift-box');
const resultDiv = document.getElementById('surprise-result');

gifts.forEach(gift => {
    gift.addEventListener('click', () => {
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        resultDiv.innerText = randomSurprise;
        gift.style.opacity = '0.5'; // لجعل الهدية تبدو مفتوحة
        gift.style.pointerEvents = 'none'; // تعطيل الضغط عليها مرة أخرى
    });
});

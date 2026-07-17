// surprises.js
const surprises = [
    "✨ أنت أجمل ما حدث في حياتي اليوم!",
    "💌 أحبك أكثر مما تتخيل.. اليوم هو يومنا!",
    "🌹 باقة ورد حلوة لقلبك الجميل.",
    "🥰 ضحكتك هي عالمي الخاص.",
    "💍 أنتِ كل شيء بالنسبة لي.",
    "🌌 في كل نجمة بالسماء أراك أنت.",
    "🎵 أغنيتنا المفضلة تهديك الحب اليوم.",
    "💖 كل يوم معك هو عيد حب صغير."
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

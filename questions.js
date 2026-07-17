// مصفوفة الأسئلة
const quizData = [
    { question: "ما هو أكثر شيء تحبه في شريكك؟", answers: ["ابتسامته", "طيبته", "ذكاءه", "كل شيء"] },
    { question: "ما هو المكان المثالي لأول لقاء رومانسي بيننا؟", answers: ["البحر", "مطعم هادئ", "في المنزل", "مكان أول لقاء"] },
    { question: "لو أهديتك وردة، أي لون تفضل؟", answers: ["الأحمر", "الوردي", "الأبيض", "لونك المفضل"] },
    { question: "ما هي أجمل ذكرى تجمعنا؟", answers: ["أول لقاء", "أول هدية", "نظراتنا", "لحظاتنا الهادئة"] }
];

// دالة تحميل السؤال
function loadRandomQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    
    // اختيار سؤال عشوائي
    const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];

    // عرض السؤال
    questionEl.innerText = randomQuestion.question;
    answersEl.innerHTML = ''; // تفريغ الأزرار القديمة

    // إنشاء أزرار الإجابات
    randomQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.className = 'btn'; // استخدام كلاس التنسيق الموحد
        
        // عند الضغط على أي إجابة، ستزيد النقاط وتختفي الأسئلة
        button.onclick = () => {
            // استدعاء دالة زيادة النقاط الموجودة في app.js
            addPoints(10); 
            
            // تحديث الواجهة
            questionEl.innerText = "❤️ اختيار رائع! تمت إضافة النقاط.";
            answersEl.innerHTML = '<p>استمر في الحب!</p>'; 
        };
        
        answersEl.appendChild(button);
    });
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = () => {
    loadRandomQuestion();
};

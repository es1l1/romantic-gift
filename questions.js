// questions.js
// 1. مصفوفة الأسئلة
const quizData = [
    {
        question: "ما هو أكثر شيء تحبه في شريكك؟",
        answers: ["ابتسامته", "طيبته", "ذكاءه", "كل شيء"]
    },
    {
        question: "ما هو المكان المثالي لأول لقاء رومانسي بيننا؟",
        answers: ["البحر", "مطعم هادئ", "في المنزل", "مكان أول لقاء"]
    },
    {
        question: "لو أهديتك وردة، أي لون تفضل؟",
        answers: ["الأحمر الكلاسيكي", "الوردي الناعم", "الأبيض النقي", "لونك المفضل"]
    },
    {
        question: "ما هي أجمل ذكرى تجمعنا؟",
        answers: ["أول لقاء", "أول هدية", "نظراتنا", "لحظاتنا الهادئة"]
    }
];

// 2. دالة لاختيار سؤال عشوائي واحد وعرضه
function loadRandomQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');

    // اختيار سؤال عشوائي
    const randomIndex = Math.floor(Math.random() * quizData.length);
    const randomQuestion = quizData[randomIndex];

    // عرض السؤال
    questionEl.innerText = randomQuestion.question;
    answersEl.innerHTML = ''; // تنظيف الأزرار القديمة

    // إضافة أزرار الإجابات
    randomQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn'); // استخدام الكلاس الموحد
        // داخل ملف questions.js
button.onclick = () => {
    addPoints(10); // إضافة 10 نقاط عند كل إجابة
    questionEl.innerText = "❤️ اختيار رائع! تمت إضافة نقاط الحب.";
    answersEl.innerHTML = ''; 
};
        button.onclick = () => {
            // هنا يمكنك إضافة تفاعل عند الضغط (مثل تغيير اللون أو إظهار رسالة)
            button.style.background = "#ff4f95";
            button.style.color = "white";
            questionEl.innerText = "❤️ اختيار رائع يا رومانسي!";
            answersEl.innerHTML = ''; // إخفاء الأزرار بعد الاختيار
        };
        answersEl.appendChild(button);
    });
}

// 3. تشغيل الدالة عند تحميل الصفحة
window.onload = loadRandomQuestion;

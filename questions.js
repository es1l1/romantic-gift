const quizData = [
    { question: "ما هو أكثر شيء تحبه في شريكك؟", answers: ["ابتسامته", "طيبته", "ذكاءه", "كل شيء"] },
    { question: "ما هو المكان المثالي لأول لقاء رومانسي بيننا؟", answers: ["البحر", "مطعم هادئ", "في المنزل", "مكان أول لقاء"] },
    { question: "لو أهديتك وردة، أي لون تفضل؟", answers: ["الأحمر", "الوردي", "الأبيض", "لونك المفضل"] }
];

function loadRandomQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];

    questionEl.innerText = randomQuestion.question;
    answersEl.innerHTML = '';

    randomQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.className = 'btn';
        button.onclick = () => {
            addPoints(10);
            questionEl.innerText = "❤️ اختيار رائع! تمت إضافة النقاط.";
            answersEl.innerHTML = '';
        };
        answersEl.appendChild(button);
    });
}

// تشغيل عند تحميل الصفحة بعد تأخير بسيط لضمان تحميل app.js
setTimeout(loadRandomQuestion, 100);

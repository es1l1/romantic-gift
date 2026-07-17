// questions.js
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

function loadRandomQuestion() {
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');

    const randomIndex = Math.floor(Math.random() * quizData.length);
    const randomQuestion = quizData[randomIndex];

    questionEl.innerText = randomQuestion.question;
    answersEl.innerHTML = '';

    randomQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        
        button.onclick = () => {
            // 1. إضافة النقاط باستخدام الدالة الموجودة في app.js
            addPoints(10); 
            
            // 2. التفاعل البصري
            button.style.background = "#ff4f95";
            button.style.color = "white";
            questionEl.innerText = "❤️ اختيار رائع يا رومانسي! تمت إضافة نقاطك.";
            answersEl.innerHTML = ''; 
        };
        answersEl.appendChild(button);
    });
}

window.onload = loadRandomQuestion;

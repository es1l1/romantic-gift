// questions.js
const quizData = [
    {
        question: "ما هو أكثر شيء تحبه في شريكك؟",
        answers: ["ابتسامته", "طيبته", "ذكاءه", "كل شيء"]
    },
    // يمكنك إضافة المزيد من الأسئلة هنا
];

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');

function loadQuestion(index) {
    const q = quizData[index];
    questionEl.innerText = q.question;
    answersEl.innerHTML = '';
    
    q.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn'); // استخدام الكلاس الموحد هنا!
        button.onclick = () => alert("اختيار رومانسي جميل!");
        answersEl.appendChild(button);
    });
}

loadQuestion(0);

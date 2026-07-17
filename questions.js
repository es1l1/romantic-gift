// questions.js
const quizData = [
    {
        question: "ما هو أكثر شيء تحبه في شريكك؟",
        answers: ["طيبته", "ابتسامته", "ذكاءه", "كل تفاصيله"]
    },
    {
        question: "ما هو المكان المثالي لأول لقاء رومانسي بيننا؟",
        answers: ["البحر", "مطعم هادئ", "في المنزل", "مكان أول لقاء"]
    },
    {
        question: "لو أهديتك وردة، أي لون تفضل؟",
        answers: ["الأحمر الكلاسيكي", "الوردي الناعم", "الأبيض النقي", "لونك المفضل"]
    }
];

// يمكنك إضافة أي عدد من الأسئلة بنفس الصيغة أعلاه

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

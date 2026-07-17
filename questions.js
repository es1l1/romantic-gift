const questions=[

{
q:"ما هو أجمل شيء في علاقتنا؟",
a:[
"الضحك ❤️",
"الاهتمام 🌹",
"الذكريات ⭐"
],
correct:0
},


{
q:"لو قضينا يوماً معاً ماذا تختار؟",
a:[
"رحلة جميلة 🚗",
"جلسة هادئة ☕",
"مغامرة جديدة 🎡"
],
correct:1
},


{
q:"ما أكثر شيء يجعلني سعيداً؟",
a:[
"ابتسامتك 😊",
"رسالتك 💌",
"وجودك ❤️"
],
correct:2
}

];


let current=0;
let points=0;


const q=document.getElementById("question");
const answers=document.getElementById("answers");
const score=document.getElementById("score");



function loadQuestion(){

if(current>=questions.length){

score.innerHTML=
`
🎉 انتهى الاختبار

<br>

حصلت على ${points} نقاط ❤️
`;

if(typeof addPoints==="function"){
addPoints(points);
}

answers.innerHTML="";

return;

}


q.innerHTML=questions[current].q;


answers.innerHTML="";


questions[current].a.forEach((x,i)=>{


let btn=document.createElement("button");

btn.innerHTML=x;


btn.onclick=function(){

if(i===questions[current].correct){

points+=10;

btn.innerHTML="✅ صحيح";

}else{

btn.innerHTML="💔 حاول مرة أخرى";

}


setTimeout(()=>{

current++;

loadQuestion();

},700);


}


answers.appendChild(btn);


});


}



loadQuestion();

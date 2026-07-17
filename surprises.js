const gifts=[

"💌 رسالة: أنت أجمل صدفة في حياتي ❤️",

"🌹 وردة لك لأنك تستحق كل الحب",

"⭐ مفاجأة خاصة: يوم جميل ينتظرك"

];


function openGift(id){


let result=document.getElementById("giftResult");


let points =
localStorage.getItem("lovePoints") || 0;



if(points < 20){

result.innerHTML=
"🔒 تحتاج إلى 20 نقطة لفتح المفاجأة";

return;

}



result.innerHTML =
gifts[id-1];


if(typeof addPoints==="function"){

addPoints(5);

}


}

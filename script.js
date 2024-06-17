var timer = 60;
var hitrn = 0;
var score = 0;
function makebubble(){
    var clutter = '';
for(var i=1;i<=180;i++){
    var rn =Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector("#pnlbotm").innerHTML = clutter;
}
function runtimer(){
    var timerint = setInterval(function(){
        if(timer >0){
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pnlbotm").innerHTML=`<h1> Game Over <br> Score = ${score}</h1>`;
        }
    },1000);

}
function hitvalue(){
    hitrn =Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pnlbotm").addEventListener("click",function(a){
    var clickednum = Number(a.target.textContent);
    if(clickednum === hitrn){
        increasescore();
        makebubble();
        hitvalue();
    }
})

runtimer();
makebubble();
hitvalue();
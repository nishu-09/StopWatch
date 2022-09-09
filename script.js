// Stop Watch......
var min=00;
var sec=00;
var count=00;
var Interval=0;
var outputHour=document.getElementById('hr');
var outputMinute=document.getElementById('min');
var outputSecond=document.getElementById('sec');
var outputCount=document.getElementById('count');
var buttonStart=document.getElementById('button-start');
var buttonStop=document.getElementById('button-stop');
let buttonReset=document.getElementById('button-reset');

buttonStart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval=setInterval(stopWatch,10);
})
buttonStop.addEventListener('click',()=>{
    clearInterval(Interval);
})
buttonReset.addEventListener('click',()=>{
    clearInterval(Interval);
    min="00";
    sec="00";
    count="00";
    outputMinute.innerHTML=min;
    outputSecond.innerHTML=sec;
    outputCount.innerHTML=count;
})
function stopWatch(){
    count++;
    if(count<=9){
        outputCount.innerHTML=`0${count}`;
    }
    if(count>9){
        outputCount.innerHTML=count;
    }
    if(count>99){
        sec++;
        outputSecond.innerHTML=`0${sec}`;
        count=0;
        outputCount.innerHTML=`0${count}`;
    }
    if(sec>9){
        outputSecond.innerHTML=sec;
    }
    if(sec>59){
        min++;
        outputMinute.innerHTML=`0${min}`;
        sec=0;
        outputSecond.innerHTML=`0${sec}`;
    }
    if(min>9){
        outputMinute.innerHTML=min;
    }
}
// the end of the year date
//1000millseconds= 1 second
let countDownDate =new Date("Dec 31, 2024 23:59:59").getTime();
//console.log(countDownDate);
let counter = setInterval(()=> {
//get date now
let dateNow =new Date().getTime();
let dateDiff= countDownDate -dateNow;

//get time units
let days= Math.floor(dateDiff/(1000*60*60*24));
let hours =Math.floor((dateDiff %(1000*60*60*24))/(1000*60*60));
let minutes=Math.floor((dateDiff % (1000*60*60))/(1000*60));
let seconds=Math.floor((dateDiff % (1000*60))/(1000));

//console.log(hours);
document.querySelector(".days").innerHTML =days <10 ? `0${days}`:days;
document.querySelector(".hours").innerHTML =hours<10 ? `0${hours}`:hours;
document.querySelector(".minutes").innerHTML =minutes<10 ? `0${minutes}`:minutes;
document.querySelector(".seconds").innerHTML =seconds <10 ? `0${seconds}`:seconds;
if(dateDiff<0){
    clearInterval(counter)
}
},1000);
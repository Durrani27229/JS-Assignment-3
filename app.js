// ================ Calculator ===================

function addValue(num){
    console.log(num)
    var result = document.getElementById('result')
    result.value += num;
}
function clearValue(){
    var result = document.getElementById('result')
    result.value
    result.value = "";
}
function result(){
    var result = document.getElementById('result')
    // if (result.value === "++" || "+-" || "+*" || "+/" || "--" || "-*" || "-/" || "-+" || "*+" || "**" || "*/" || "*-" || "//" || "/-" || "/*" || "/+")
    // {
    //     alert("Please do not use double operator")
    // }else{
    //     result.value = eval(result.value);
    // }
    result.value = eval(result.value);
}


// ================= Stop Watch ===================


// var count = 0;
// var interval;
// function timer(){
//     count++;
//     console.log(count);
// }
// interval = setInterval(timer, 1000);
// // setTimeout(timer , 5000)
// setTimeout(function() {
//     clearInterval(interval)
// }, 10000);

var hr = 0;
var min = 0;
var sec = 0;
var mili = 0;
var interval;
var hour = document.getElementById('hr')
var minute = document.getElementById('min')
var second = document.getElementById('sec')
var miliSecond = document.getElementById('milisec')

function startTimer(){
    mili++;
    miliSecond.innerHTML = mili;
    if(mili >= 100){
        sec++;
        second.innerHTML = sec;
        mili = 0;
    }else if(sec >= 60){
        min++;
        minute.innerHTML = min;
        sec = 0;
    }else if (min >= 60){
        hr++;
        hour.innerHTML = hr;
        min = 0;
    }
}




function start(){
    interval = setInterval(startTimer, 10);
}
function stop(){
    clearInterval(interval);
    
}
function reset(){
    clearInterval(interval)
    hr = 0;
    min = 0;
    sec = 0;
    mili = 0;
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;
    miliSecond.innerHTML = mili;
}
// ================ Stop Watch End =====================
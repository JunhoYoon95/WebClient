var inputStartDay = prompt("태어난 날짜를 입력하세요 ", "ex : 1900-01-01") // 시작일 설정

var today = new Date(); // 오늘
var startDay = new Date(inputStartDay);

var year = startDay.getFullYear();
var month = startDay.getMonth() + 1;
var day = startDay.getDate();
document.querySelector('#startDay').innerHTML = year + "년" + month + "월" + day + "일";



var calcDay = 24 * 60 * 60 * 1000; // 밀리초로 하루를 변환할때에
var todayMilli = today.getTime();
var startMilli = startDay.getTime();
var passedDay = Math.round((todayMilli - startMilli)/calcDay);
document.querySelector("#today").innerHTML = "<h3>" + passedDay + "일 지남</h3>";

calcDate(100);
calcDouble(passedDay);

function calcDate(number){
    var futureMilli = startMilli + (calcDay * number);
    // 입력받은 날짜 만큼 지난 날의 밀리초
    var dDay = Math.round((todayMilli - futureMilli)/calcDay);
    var futureDate = new Date(futureMilli);
    year = futureDate.getFullYear();
    month = futureDate.getMonth() + 1;
    day = futureDate.getDate();


    console.log(number);
    document.querySelector("#dday"+number).innerHTML = dDay + "일 지남<br>" + year + "년" + month + "월" + day + "일";
}
function calcDouble(number){
    var futureMilli = startMilli + (calcDay * number);
    // 입력받은 날짜 만큼 지난 날의 밀리초
    var dDay = Math.round((todayMilli - futureMilli)/calcDay);
    var futureDate = new Date(futureMilli);
    year = futureDate.getFullYear();
    month = futureDate.getMonth() + 1;
    day = futureDate.getDate();


    console.log(number);
    document.querySelector("#ddaydouble").innerHTML = dDay + "일 남음<br>" + year + "년" + month + "월" + day + "일";
}
let TimeData= new Date();
let Hours = TimeData.getHours();

// 
// 
if (Hours <= 13) {
    document.getElementById('greeting').innerHTML="Buongiorno!";
    document.getElementById('greeting').style.color="#853224";
    document.getElementById('body').style.backgroundImage="url(./morningapp.jpg)";
    document.getElementById('container').style.backgroundColor="#853224";
    document.getElementById('weekday').style.color="#FF7676";
    document.getElementById('month').style.color ="#FF7676";


}else if (Hours > 13 && Hours <18) {
    document.getElementById('greeting').innerHTML="Buon Pomeriggio!";
    document.getElementById('greeting').style.color="white";
    document.getElementById('body').style.backgroundImage="url(./afternoonapp.jpg)";
    document.getElementById('container').style.backgroundColor= '#26A7D2';
    document.getElementById('weekday').style.color='#5362E5';
    document.getElementById('month').style.color ='#5362E5';

}else if (Hours >=18 && Hours <=22){
    document.getElementById('greeting').innerHTML="Buonasera!";
    document.getElementById('greeting').style.color="white";
    document.getElementById('body').style.backgroundImage="url(./eveningapp.jpg)";
    document.getElementById('container').style.backgroundColor= '#222342';
    document.getElementById('weekday').style.color='#FF7676';
    document.getElementById('month').style.color ='#FF7676';

}else {
    document.getElementById('greeting').innerHTML="Buon Notte!";
    document.getElementById('greeting').style.color='#5362E6';
    document.getElementById('body').style.backgroundImage="url(./nightapp.jpg)";
    document.getElementById('container').style.backgroundColor= '#21324C';
    document.getElementById('weekday').style.color='#5362E5';
    document.getElementById('month').style.color ='#5362E5';

}
// 
// 

let WeekDay = TimeData.getDay();
let WeekDayName ="";

switch (WeekDay){
    case 0 : WeekDayName = "Lunedì";
    break;
    case 1 : WeekDayName = "Martedì";
    break;
    case 2 : WeekDayName = "Mercoledì";
    break;
    case 3 : WeekDayName = "Giovedì";
    break;
    case 4 : WeekDayName = "venerdì";
    break;
    case 5 : WeekDayName = "Sabato";
    break;
    case 6 : WeekDayName = "Domenica";
}
document.getElementById('weekday').textContent=WeekDayName;

//
// 

let DayN = TimeData.getDate();
document.getElementById('numberday').textContent=DayN;

// 
// 

let MonthN = TimeData.getMonth()+1;
let MonthName ="";
    switch (MonthN){
        case 1 : MonthName = "gennaio";
        break;
        case 2 : MonthName = "febbraio";
        break;
        case 3 : MonthName = "marzo";
        break;
        case 4 : MonthName = "aprile";
        break;
        case 5 : MonthName = "maggio";
        break;
        case 6 : MonthName = "giugno";
        break;
        case 7 : MonthName = "luglio";
        break;
        case 8 : MonthName = "agosto";
        break;
        case 9 : MonthName = "settembre";
        break;
        case 10 : MonthName = "ottobre";
        break;
        case 11 : MonthName = "novembre";
        break;
        case 12 : MonthName = "dicembre";
    }
document.getElementById('month').textContent=MonthName;

//
// 

const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const seoconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) {
        hr = '0' +hr;
    }
    if (min < 10) {
        min = '0' +min;
    }
    if (sec < 10) {
        sec = '0' +min;
    }

    hour.textContent= hr;
    minute.textContent = min;
    
})

// 
// 


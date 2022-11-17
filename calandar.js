let date = new Date();
console.log('Date',date);
let day = date.getDay();

if(day == '1'){
    document.querySelector('.sat').style.color = 'palegreen';
}
if(day == '2'){
    document.querySelector('.sun').style.color = 'palegreen';
}
if(day == '3'){
    document.querySelector('.mon').style.color = 'palegreen';
}
if(day == '4'){
    document.querySelector('.tues').style.color = 'palegreen';
}
if(day == '5'){
    document.querySelector('.wed').style.color = 'palegreen';
}
if(day == '6'){
    document.querySelector('.thurs').style.color = 'palegreen';
}
if(day == '7'){
    document.querySelector('.fri').style.color = 'palegreen';
}


setInterval(() =>{
    
let date = new Date();
console.log('Date',date);
let day = date.getDay();

if(day == '6'){
    document.querySelector('.sat').style.color = 'palegreen';
}
if(day == '7'){
    document.querySelector('.sun').style.color = 'palegreen';
}
if(day == '1'){
    document.querySelector('.mon').style.color = 'palegreen';
}
if(day == '2'){
    document.querySelector('.tues').style.color = 'palegreen';
}
if(day == '3'){
    document.querySelector('.wed').style.color = 'palegreen';
}
if(day == '4'){
    document.querySelector('.thurs').style.color = 'palegreen';
}
if(day == '5'){
    document.querySelector('.fri').style.color = 'palegreen';
}

let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');

    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh + (mm /12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
},1000);




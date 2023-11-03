let celciusValue=document.querySelector(".celcius >input");
let fahrenheitValue=document.querySelector(".fahrenheit >input");
let kelvinValue=document.querySelector(".kelvin >input");
let btn=document.querySelector(".button button");
// function to round the number.
function numberRound(number){
    return Math.round(number*100)/100;
}
// celcius to fahrenheit and kelvin.
celciusValue.addEventListener("input",()=>{
    let tempc=parseFloat(celciusValue.value);
    let tempf=(tempc*(9/5))+32;
    let tempk=tempc+273.15;

    fahrenheitValue.value=numberRound(tempf);
    kelvinValue.value=numberRound(tempk);
})
// fahrenheit to celcius and kelvin.
fahrenheitValue.addEventListener("input",()=>{
    let tempf=parseFloat(fahrenheitValue.value);
    let tempc=(tempf-32)*(5/9);
    let tempk=(tempf-32)*(5/9)+273.15;

    celciusValue.value=numberRound(tempc);
    kelvinValue.value=numberRound(tempk);
})
// kelvin to celcius and fahrenheit.
kelvinValue.addEventListener("input",()=>{
    let tempk=parseFloat(kelvinValue.value);
    let tempc=tempk-273.15;
    let tempf=(tempk-273.15)*(9/5)+32;

    celciusValue.value=numberRound(tempc);
    fahrenheitValue.value=numberRound(tempf);
})
// Button to clear all the input fields
btn.addEventListener("click",()=>{
    celciusValue.value="";
    fahrenheitValue.value="";
    kelvinValue.value="";
})
let menulist=document.querySelector('.menulist');
menulist.style.maxHeight="0px";

function togglemenu(){
    if(menulist.style.maxHeight=="0px"){
        menulist.style.maxHeight="380px";
    }
    else{
        menulist.style.maxHeight="0px";
    }

}


let age=document.querySelector('.input-age');
var height=document.querySelector('.input-height');
let weight= document.querySelector('.input-weight');
let quote=document.querySelector('.quote');
let rand=Math.random()*100;
console.log(rand);
    if(rand>0&&rand<=10){
        quote.innerHTML="“A healthy outside starts from the inside.” - Robert Urich";
    }
    else if(rand>10&&rand<=20){
        quote.innerHTML="“If you keep good food in your fridge, you will eat good food.” – Errick McAdams";
    }
    else if(rand>20&&rand<=30){
        quote.innerHTML="“There is no health without mental health; mental health is too important to be left to the professionals alone, and mental health is everyone’s business.” – Vikram Patel";
    }
    else if(rand>30&&rand<=40){
        quote.innerHTML="“Those who have no time for healthy eating will sooner or later have to find the time for illness.– Edward Stanley";
    }
    else if(rand>40&&rand<=50){
        quote.innerHTML="“A calm mind brings inner strength and self-confidence, so that’s very important for good health.”    – Dalai Lama";
    }
    else if(rand>50&&rand<=60){
        quote.innerHTML="“Sorry, there’s no magic bullet. You gotta eat healthy and live healthy to be healthy and look healthy. End of story.” – Morgan Spurlock";
    }
    else if(rand>60&&rand<70){
        quote.innerHTML="“Our bodies are our gardens – our wills are our gardeners.” – William Shakespeare ";
    }
    else if(rand>70&&rand<=80){
        quote.innerHTML="“The key to a healthy life is having a healthy mind.” –  Richard Davidson";
    }
    else if(rand>80&&rand<=90){
        quote.innerHTML="“To keep the body in good health is a duty…otherwise we shall not be able to keep the mind strong and clear.” – Buddha ";
    }
    else if(rand>90&&rand<=100){
        quote.innerHTML="“It is health that is real wealth and not pieces of gold and silver.” – Mahatma Gandhi";
    }


document.getElementById('caluu').addEventListener("click", function(){
    
    
    
    
    
    
  
    let ans=weight.value/(height.value/100*height.value/100);
    document.querySelector('.ans').innerHTML=ans.toFixed(2);

    if(age.value>=2&&age.value<=120){
        document.querySelector('.tip-heading').innerHTML="Tips:-";
    if(ans<18.5&&ans>0){
        document.querySelector('.remark').innerHTML="Underweight";
        document.querySelector('.tips').innerHTML="<ul> <li>Eat more calories</li><li>Add healthy fats</li><li> Add protein </li><li>Drink more calories </li><li>Exercise</li></ul>";   
        document.querySelector('.more_detail').innerHTML="Click here for more details";
        document.querySelector('.more_detail').addEventListener("click", function(){
            window.open("underweight-detal.html");
        })
    }
    else if(ans>=18.5&&ans<=24.9){
        document.querySelector('.remark').innerHTML="Normal";
    }
    else if(ans>=25.0&&ans<=39.9){
        document.querySelector('.remark').innerHTML="Overweight";
        document.querySelector('.tips').innerHTML="<ul> <li>Eat varied, colorful, nutritionally dense foods</li><li>Keep a food and weight diary</li><li>Engage in regular physical activity and exercise</li>   <li>Eliminate liquid calories</li></ul>";
      document.querySelector('.more_detail').innerHTML="Click here for more details";
        document.querySelector('.more_detail').addEventListener("click", function(){
        window.open("overweight.html");
    })}
    else{
    document.querySelector('.remark').innerHTML="Obese";}
    }

    else{
            document.querySelector('.remark').innerHTML="Please enter age between 2-120";
    document.querySelector('.ans').innerHTML="";
    
    }

});

let vid1=document.querySelector('.vp-1');
let vid2=document.querySelector('.vp-2');
function playvideo(){

    location.href=("video-player.html");
}
  

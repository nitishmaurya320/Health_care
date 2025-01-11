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
    
    
    
    
    
    let bmiImage=document.querySelector('.bmi1');
  
    let ans=weight.value/(height.value/100*height.value/100);
    document.querySelector('.ans').innerHTML=ans.toFixed(2);

    if(age.value>=2&&age.value<=120){
        document.querySelector('.tip-heading').innerHTML="Tips:-";
        bmiImage.style.display="none";
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
    document.querySelector('.remark').innerHTML="Obese";
    document.querySelector('.tips').innerHTML="<ul> <li>Exercise</li><li>Limit processed foods, sugary drinks, and unhealthy fats   </li><li> Read food labels</li>"; 
    document.querySelector('.more_detail').innerHTML="Click here for more details";
    document.querySelector('.more_detail').addEventListener("click", function(){
        window.open("overweight.html");

});
        
    }}

    else{
            document.querySelector('.remark').innerHTML="Please enter age between 2-120";
    document.querySelector('.ans').innerHTML="";
    
    }

});


// function playvideo(a){
//     let vid1=document.querySelector(`.vp-${a}`);
    
//     vid1.style.display="block";
//     vid1.style.height="auto";
//     vid1.style.width="70%";
//     vid1.style.position="fixed";
//     vid1.style.top="50%";
//     vid1.style.left="50%";
//     vid1.style.transform="translate(-50%,-50%)";
//     vid1.style.zIndex="1";
    
// }
let close1=document.querySelector('.close');
let vid1=document.querySelector(`.vp-1`);

function playvideo(file){
    let vid1=document.querySelector(`.vp-1`);
    
    vid1.src=file
    vid1.autoplay=true;
    vid1.style.display="block";
    vid1.style.height="auto";
    vid1.style.width="70%";
    vid1.style.position="fixed";
    vid1.style.top="50%";
    vid1.style.left="50%";
    vid1.style.transform="translate(-50%,-50%)";
    vid1.style.zIndex="1";

    close1.style.display="block";
    close1.style.height="auto";
    close1.style.width="5%";
    close1.style.position="fixed";
    close1.style.top="15%";
    close1.style.left="82%";
    close1.style.transform="translate(-50%,-50%)";
    close1.style.zIndex="1";
    var x = window.matchMedia("(max-width: 708px)")

    if (x.matches) { // If media query matches
        close1.style.top="39%";
        vid1.style.width="100%";
        close1.style.left="94%";
        close1.style.width="10%";

    } else {
      
    }
    
}
function cut(){
    vid1.style.display="none"
    close1.style.display="none";
    vid1.pause();

}

//cal- calc
let fooditem=document.querySelector('.banana-btn');

let sum= 0;
let food=document.querySelector('.food-list');
function add(fruit1,cal){
    sum=sum+cal;
   
    let node =document.createElement("div");
    let node1 =document.createElement("p");
    let node2 =document.createElement("p");

    

   

    let textnode = document.createTextNode(fruit1);
    let calorie = document.createTextNode(cal);
    
    


    node1.appendChild(textnode);
    

    node2.appendChild(calorie);
    node.appendChild(node1);
      
    node.appendChild(node2);
    
    
    
    // let buton=document.querySelector(`.${btn}`);
    // buton.style.display="none"
    
    
   food.appendChild(node);
   node.style.display="flex";
node.style.height="30px";
// node1.style.paddingLeft="20px"
// node1.style.paddingRight="200px";
// node2.style.marginLeft="20px"
node.style.justifyContent="space-around"

document.querySelector('.totalcalory').innerHTML=sum;
}   
function AC(){
const clear = document.querySelector('.clear');
while (food.firstChild) {
    food.removeChild(food.lastChild);
  }
  sum=0;
  document.querySelector('.totalcalory').innerHTML=sum;
}


  
  
    
    
    
    


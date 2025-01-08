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



  

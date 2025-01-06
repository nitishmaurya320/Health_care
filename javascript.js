
let age=document.querySelector('.input-age');
var height=document.querySelector('.input-height');
let weight= document.querySelector('.input-weight');



document.getElementById('caluu').addEventListener("click", function(){
    
    
    
    
    
    document.querySelector('.tip-heading').innerHTML="Tips:-";
  
    let ans=weight.value/(height.value/100*height.value/100);
    document.querySelector('.ans').innerHTML=ans.toFixed(2);

    if(age.value>=2&&age.value<=120){
        
    if(ans<18.4){
        document.querySelector('.remark').innerHTML="Underweight";
        document.querySelector('.tips').innerHTML="Eat more calories <br> Add healthy fats <br> Add protein <br> Drink more calories <br> Exercise";   
        document.querySelector('.new').innerHTML="Click here for more details"
        document.querySelector('.new').addEventListener("click", function(){
            window.open("underweight-detal.html");
        })
    }
    else if(ans>18.4&&ans<24.9){
        document.querySelector('.remark').innerHTML="Normal";
    }
    else if(ans>25.0&&ans<39.9){
        document.querySelector('.remark').innerHTML="Overweight";
    }   
    else{
    document.querySelector('.remark').innerHTML="Obese";}
    }

    else{
            document.querySelector('.remark').innerHTML="Please enter age between 2-120";
    document.querySelector('.ans').innerHTML="";
    
    }

});



  

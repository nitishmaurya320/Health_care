
let age=document.querySelector('.input-age');
var height=document.querySelector('.input-height');
let weight= document.querySelector('.input-weight');




document.getElementById('caluu').addEventListener("click", function(){
  
    let ans=weight.value/(height.value/100*height.value/100);
    document.querySelector('.ans').innerHTML=ans.toFixed(2);

    if(ans<18.4){
        document.querySelector('.remark').innerHTML="Underweight";
    }
    else if(ans>18.4&&ans<24.9){
        document.querySelector('.remark').innerHTML="Normal";
    }
    else if(ans>25.0&&ans<39.9){
        document.querySelector('.remark').innerHTML="Overweight";
    }   
    else
    document.querySelector('.remark').innerHTML="Obese";
});


  

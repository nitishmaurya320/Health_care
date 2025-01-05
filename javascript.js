
let age=document.querySelector('.input-age');
var height=document.querySelector('.input-height');
let weight= document.getElementById("input_weight");




document.getElementById('caluu').addEventListener("click", function(){
  
    let ans=weight.value/(height.value/100*height.value/100);
    document.querySelector('.ans').innerHTML=ans.toFixed(2);
    
});


  

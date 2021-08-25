const side1=document.querySelector("#side1");
const side2=document.querySelector("#side2");
const calculateHypotenuseBtn=document.querySelector("#calculate-btn");
const output=document.querySelector("#outputBox")

function calculateAndShow(){
    var hypotenuse=0;
    var baseComponent= Math.pow(side1.value,2);
    var heightComponent=Math.pow(side2.value,2);
    sum=baseComponent+heightComponent;
    hypotenuse=Math.sqrt(sum);
    output.innerHTML="Hypotenuse is "+hypotenuse;
    
    
    
}



calculateHypotenuseBtn.addEventListener("click",calculateAndShow);
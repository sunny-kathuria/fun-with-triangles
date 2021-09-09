const base=document.querySelector("#base");
const height =document.querySelector("#height");
const calculateAreaBtn=document.querySelector("#calculateArea-btn");


function calculateAndShow(){
    console.log(base.value);
    var area=0;
    area=(base.value*height.value)/2;
    output.innerHTML="Area of triangle is "+area;
}

calculateAreaBtn.addEventListener("click", calculateAndShow);
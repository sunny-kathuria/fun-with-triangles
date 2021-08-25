const base=document.querySelector("#base");
const height =document.querySelector("#height");
const calculateAreaBtn=document.querySelector("#calculateArea-btn");


function calculateAndShow(){
    console.log(base.value);
}

calculateAreaBtn.addEventListener("click", calculateAndShow);
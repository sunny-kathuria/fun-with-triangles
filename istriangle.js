const angle1=document.querySelector("#angle1");
const angle2=document.querySelector("#angle2");
const angle3=document.querySelector("#angle3");
const checkButton=document.querySelector("#check-button");
const outputBox=document.querySelector("#output");


checkButton.addEventListener("click", checkTriangle)

function checkTriangle(){
    
    const sum=Number(angle1.value)+Number(angle2.value)+Number(angle3.value);
    if(sum===180){ outputBox.value="Hurrahhh!!This forms a Traingle";

    }
    else{
         outputBox.value="Try, some other values";
    }
}
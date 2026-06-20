function result(){
let inputValue=document.getElementById('inputData').value;



let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="red"

//change color of body element

document.getElementsByTagName('body')[0].style.backgroundColor="lightblue"; 

}

// addEventlistener method

let paraBkg=document.getElementById('para');

function colorchange(){
    paraBkg.style.backgroundColor=
    "#"+Math.floor(Math.random()*16777215).toString(16);
}
paraBkg.addEventListener('mouseout',colorchange);



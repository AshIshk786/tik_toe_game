let boxes = document.querySelectorAll(".push");
let reset=document.querySelector(".secondary_btn");
let turn0=true;

const winstreak=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((push)=>
{
    push.addEventListener("click",()=>
    {
        console.log("this is box");
        push.innerText="0";
        if(turn0==true)
        {
            push.innerHTML="X";
            turn0=false;
        }
        else
        {
            push.innerHTML="0";
            turn0=true;
        }
        push.disabled=true;
    })
    })
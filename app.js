let boxes = document.querySelectorAll(".push");
let reset=document.querySelector(".secondary_btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let new_btn=document.querySelector("#new-btn");



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
    console.log("please click to start the game ")
    push.addEventListener("click",()=>
    {
        push.innerText="0";
        if(turn0==true)
        {
            push.innerHTML="X";
           console.log("now 0 turn");
            turn0=false;
            push.style.color="green";
        }
        else
        {
            push.innerHTML="0";
           console.log("now X turn");
            turn0=true;
        }
        push.disabled=true;                            //...............disabled so that value in a box will not change after second click 
        checkwinner();
    })
    })
    
    const checkwinner = () =>
    {
        for ( let pattern of winstreak)
        {
            // console.log(pattern);                                 ....................... //to check the pattern to be imported 
            // console.log(pattern[0],pattern[1],pattern[2]);           .....................//to configure indexing of each box  
            // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);  .........//to check the input givem in each boxes
    
            // console.log(boxes[pattern[0]].innerText,
            // boxes[pattern[1]].innerText,
            // boxes[pattern[2]].innerText);                         ...................... //to assign values in index of each box
      
                let pos1val=boxes[pattern[0]].innerText;
                let pos2val=boxes[pattern[1]].innerText;
                let pos3val=boxes[pattern[2]].innerText;                                   //to store value in each index
    
    if (pos1val!="" && pos2val!="" && pos3val!="" ) {
          if( pos1val==pos2val && pos2val==pos3val)
      {
        console.log( pos1val + " winner");
        showwinner(pos1val);
        disable();
            

      }
            }
        }
    }
    const showwinner= (winner) =>
    {
msg.innerText=`CONGRATULATIONS ,${winner} won the game`  ;
msgcontainer.classList.remove("hide");
    }
    const disable =()=>
    {
        for( let push of boxes)
        {
            push.disabled=true;

        }
    }
    const enable =()=>
    {
        for( let push of boxes)
        {
            push.disabled=false;
            push.innerText="";

        }
    }
    const resetbtn = ()=>
    {
        turn0=true;
        enable();
        msgcontainer.classList.add("hide");
    }
    reset.addEventListener("click",resetbtn),
    new_btn.addEventListener("click",resetbtn);

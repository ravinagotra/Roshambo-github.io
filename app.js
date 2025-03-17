let userscore =0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userpara =  document.querySelector("#user-score");
const comppara =  document.querySelector("#comp-score");
const gencompchoice = () =>
{
        const option = ["rock","paper","Scissors"];
        const randomidx = Math.floor(Math.random()*3);
        return option[randomidx];
};

const drow = ()=>
{
    console.log("game was draw");
    msg.innerText="Game was drow, play again.";
};
const showwinner =(userwin, userchoice, compchoice) =>
    {
        if(userwin)
        {   userscore++;
            userpara.innerText = userscore;
            console.log("you win!");
            msg.innerText = `you win ${userchoice} beats ${compchoice} `;
            msg.style.backgroundcolor = "green";
        }
        else
        {   compscore++;
            comppara.innerText = compscore;
            console.log("computer win");
            msg.innerText= `you loss ${compchoice} beats ${userchoice}`;
            msg.style.backgroundcolor = "red";
        }
    };


const playgame = (userchoice) =>
{
    console.log("userchoice =",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice=",compchoice);
    if (userchoice===compchoice)
    {
    drow();
    }
    else
    {
    let userwin = true;
    if (userchoice==="rock")
    {
    userwin = compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
    {
    userwin = compchoice==="scissors"?false:true;
    }
    else
    {
    userwin = compchoice==="rock"?false:true;
    }
    showwinner(userwin, userchoice, compchoice);
    }
    
};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
let userchoice = choice.getAttribute("id");
playgame(userchoice);
});
});


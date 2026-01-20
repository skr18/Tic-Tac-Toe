console.log("Heeleo there")
let music = new Audio('/onii_chan.mp3')
let audioturn = new Audio('/ting.mp3')
let gameover = new Audio('/gameover.mp3')
let turn = "X";
let isgameover = false;
//Function to change turn
const changeTurn = ()=>{
    return turn === "X"? "0":"X"
}

//function to check for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxText');
    let win =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText ) && 
        (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText ) && 
        (boxtexts[e[0]]).innerText !=="" )
        {
                document.querySelector(".info").innerText =
                boxtexts[e[0]].innerText + " Won "
                isgameover=true;
                document.querySelector('.gif').getElementsByTagName('img')[0].style.width='200px'
                music.play();
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==="")
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            console.log("Heeleo there")
            if(!isgameover)
            {
                console.log("Heo ere")
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
    })
})

//Handel Reset button
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width='0px'
})
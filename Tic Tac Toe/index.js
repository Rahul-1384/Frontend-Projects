const click1 = document.querySelector('[click1]');
const click2 = document.querySelector('[click2]');
const click3 = document.querySelector('[click3]');
const click4 = document.querySelector('[click4]');
const click5 = document.querySelector('[click5]');
const click6 = document.querySelector('[click6]');
const click7 = document.querySelector('[click7]');
const click8 = document.querySelector('[click8]');
const click9 = document.querySelector('[click9]');
const turn = document.querySelector('[turn]');
const container = document.querySelector('[container]');
const disbl = document.querySelector('[disable]');
const game = document.querySelector('[game]');
const winDraw = document.querySelector('[win-draw]');
const wrapper = document.querySelector('[wrapper]');
const choosePlayer = document.querySelector('[choose-player]');
const btn1 = document.querySelector('[btn1]');
const btn2 = document.querySelector('[btn2]');



game.addEventListener('click', () => {
    location.reload();
});

function firstMoveX(){
    turn.textContent = 'X';
    document.body.style.backgroundImage = "url('backg.gif')";
    choosePlayer.classList.add('choose-active');
    wrapper.classList.add('wrapper-active');
    wrapper.style.color = 'white';
}
function firstMoveO(){
    turn.textContent = 'O';
    document.body.style.backgroundImage = "url('backg.gif')";
    choosePlayer.classList.add('choose-active');
    wrapper.classList.add('wrapper-active');
    wrapper.style.color = 'white';
}

// Choosing the player who will play first move
btn1.addEventListener('click', firstMoveX);
btn2.addEventListener('click', firstMoveO);



function oWin(){
    if((click1.textContent == 'O' && click2.textContent == 'O' && click3.textContent == 'O') ||
        (click4.textContent == 'O' && click5.textContent == 'O' &&click6.textContent == 'O') ||
        (click7.textContent == 'O' && click8.textContent == 'O' && click9.textContent == 'O') ||
        (click1.textContent == 'O' && click4.textContent == 'O' && click7.textContent == 'O') ||
        (click2.textContent == 'O' && click5.textContent == 'O' && click8.textContent == 'O') ||
        (click3.textContent == 'O' && click6.textContent == 'O' && click9.textContent == 'O') ||
        (click1.textContent == 'O' && click5.textContent == 'O' && click9.textContent == 'O') ||
        (click3.textContent == 'O' && click5.textContent == 'O' && click7.textContent == 'O')
    ){
        disbl.classList.add('active');
        winDraw.textContent = 'Congratulations!🎉🍾 You Won Mr.O';
        document.body.style.backgroundImage = "url('celeb.gif')";
        wrapper.classList.add('wrap');
        wrapper.style.color = 'black';
    }
}
function xWin(){
    if((click1.textContent == 'X' && click2.textContent == 'X' && click3.textContent == 'X') ||
        (click4.textContent == 'X' && click5.textContent == 'X' &&click6.textContent == 'X') ||
        (click7.textContent == 'X' && click8.textContent == 'X' && click9.textContent == 'X') ||
        (click1.textContent == 'X' && click4.textContent == 'X' && click7.textContent == 'X') ||
        (click2.textContent == 'X' && click5.textContent == 'X' && click8.textContent == 'X') ||
        (click3.textContent == 'X' && click6.textContent == 'X' && click9.textContent == 'X') ||
        (click1.textContent == 'X' && click5.textContent == 'X' && click9.textContent == 'X') ||
        (click3.textContent == 'X' && click5.textContent == 'X' && click7.textContent == 'X')
    ){
        disbl.classList.add('active');
        winDraw.textContent = 'Congratulations!🎉🍾 You Won Mr.X';
        document.body.style.backgroundImage = "url('celeb.gif')";
        wrapper.classList.add('wrap');
        wrapper.style.color = 'black';
    }
}

function setColor(){
    if(click1.textContent === 'X' && click2.textContent === 'X' && click3.textContent === 'X'){
        click1.style.backgroundColor = 'lightgreen';
        click2.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }
    if(click4.textContent === 'X' && click5.textContent === 'X' && click6.textContent === 'X'){
        click4.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click6.style.backgroundColor = 'lightgreen';
    }
    if(click7.textContent === 'X' && click8.textContent === 'X' && click9.textContent === 'X'){
        click7.style.backgroundColor = 'lightgreen';
        click8.style.backgroundColor = 'lightgreen';
        click9.style.backgroundColor = 'lightgreen';
    }
    if(click1.textContent === 'X' && click4.textContent === 'X' && click7.textContent === 'X'){
        click1.style.backgroundColor = 'lightgreen';
        click4.style.backgroundColor = 'lightgreen';
        click7.style.backgroundColor = 'lightgreen';
    }
    if(click2.textContent === 'X' && click5.textContent === 'X' && click8.textContent === 'X'){
        click5.style.backgroundColor = 'lightgreen';
        click2.style.backgroundColor = 'lightgreen';
        click8.style.backgroundColor = 'lightgreen';
    }
    if(click3.textContent === 'X' && click6.textContent === 'X' && click9.textContent === 'X'){
        click9.style.backgroundColor = 'lightgreen';
        click6.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }
    if(click1.textContent === 'X' && click5.textContent === 'X' && click9.textContent === 'X'){
        click1.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click9.style.backgroundColor = 'lightgreen';
    }
    if(click3.textContent === 'X' && click5.textContent === 'X' && click7.textContent === 'X'){
        click7.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }


    if(click1.textContent === 'O' && click2.textContent === 'O' && click3.textContent === 'O'){
        click1.style.backgroundColor = 'lightgreen';
        click2.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }
    if(click4.textContent === 'O' && click5.textContent === 'O' && click6.textContent === 'O'){
        click4.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click6.style.backgroundColor = 'lightgreen';
    }
    if(click7.textContent === 'O' && click8.textContent === 'O' && click9.textContent === 'O'){
        click7.style.backgroundColor = 'lightgreen';
        click8.style.backgroundColor = 'lightgreen';
        click9.style.backgroundColor = 'lightgreen';
    }
    if(click1.textContent === 'O' && click4.textContent === 'O' && click7.textContent === 'O'){
        click1.style.backgroundColor = 'lightgreen';
        click4.style.backgroundColor = 'lightgreen';
        click7.style.backgroundColor = 'lightgreen';
    }
    if(click2.textContent === 'O' && click5.textContent === 'O' && click8.textContent === 'O'){
        click5.style.backgroundColor = 'lightgreen';
        click2.style.backgroundColor = 'lightgreen';
        click8.style.backgroundColor = 'lightgreen';
    }
    if(click3.textContent === 'O' && click6.textContent === 'O' && click9.textContent === 'O'){
        click9.style.backgroundColor = 'lightgreen';
        click6.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }
    if(click1.textContent === 'O' && click5.textContent === 'O' && click9.textContent === 'O'){
        click1.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click9.style.backgroundColor = 'lightgreen';
    }
    if(click3.textContent === 'O' && click5.textContent === 'O' && click7.textContent === 'O'){
        click7.style.backgroundColor = 'lightgreen';
        click5.style.backgroundColor = 'lightgreen';
        click3.style.backgroundColor = 'lightgreen';
    }
}


function showGameStatus(event){

    // Mark O or X
    if(turn.textContent === 'X'){
        if(event.target.textContent === ''){
            event.target.textContent = 'X';
            turn.textContent = 'O';
        }else{
            alert("Hey Mr.X, It's Your Wrong Move");
        }
    }else{
        if(event.target.textContent === ''){
            event.target.textContent = 'O';
            turn.textContent = 'X'
        }else{
            alert("Hey Mr.O, It's Your Wrong Move");
        }
    }







    // If win, set color
    setColor();



    // check if O wins
    oWin();

    // check if X wins
    xWin();


    // after getting a match in hands, disabling all the moves
    if(click1.textContent == "" || click2.textContent == "" || click3.textContent == "" || click4.textContent == "" || click5.textContent == "" || click6.textContent == "" || click7.textContent == "" || click8.textContent == "" || click9.textContent == ""){
    
    }else{
        if((click1.textContent == 'X' && click2.textContent == 'X' && click3.textContent == 'X') ||
        (click4.textContent == 'X' && click5.textContent == 'X' &&click6.textContent == 'X') ||
        (click7.textContent == 'X' && click8.textContent == 'X' && click9.textContent == 'X') ||
        (click1.textContent == 'X' && click4.textContent == 'X' && click7.textContent == 'X') ||
        (click2.textContent == 'X' && click5.textContent == 'X' && click8.textContent == 'X') ||
        (click3.textContent == 'X' && click6.textContent == 'X' && click9.textContent == 'X') ||
        (click1.textContent == 'X' && click5.textContent == 'X' && click9.textContent == 'X') ||
        (click3.textContent == 'X' && click5.textContent == 'X' && click7.textContent == 'X')
        ){
        disbl.classList.add('active');
        winDraw.textContent = 'Congratulations!🎉🍾 You Won Mr.X';
        document.body.style.backgroundImage = "url('celeb.gif')";
        wrapper.classList.add('wrap');
        }

        else if((click1.textContent == 'O' && click2.textContent == 'O' && click3.textContent == 'O') ||
            (click4.textContent == 'O' && click5.textContent == 'O' &&click6.textContent == 'O') ||
            (click7.textContent == 'O' && click8.textContent == 'O' && click9.textContent == 'O') ||
            (click1.textContent == 'O' && click4.textContent == 'O' && click7.textContent == 'O') ||
            (click2.textContent == 'O' && click5.textContent == 'O' && click8.textContent == 'O') ||
            (click3.textContent == 'O' && click6.textContent == 'O' && click9.textContent == 'O') ||
            (click1.textContent == 'O' && click5.textContent == 'O' && click9.textContent == 'O') ||
            (click3.textContent == 'O' && click5.textContent == 'O' && click7.textContent == 'O')
        ){
            disbl.classList.add('active');
            winDraw.textContent = 'Congratulations!🎉🍾 You Won Mr.O';
            document.body.style.backgroundImage = "url('celeb.gif')";
            wrapper.classList.add('wrap');
        }
        else{
            disbl.classList.add('active');
            winDraw.textContent = 'Uhhh!😕. Match Draw😵';
        }
        
    }
}

click1.addEventListener('click',  showGameStatus);
click2.addEventListener('click',  showGameStatus);
click3.addEventListener('click',  showGameStatus);
click4.addEventListener('click',  showGameStatus);
click5.addEventListener('click',  showGameStatus);
click6.addEventListener('click',  showGameStatus);
click7.addEventListener('click',  showGameStatus);
click8.addEventListener('click',  showGameStatus);
click9.addEventListener('click',  showGameStatus);
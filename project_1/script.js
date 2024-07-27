// let gameSeq = [];
// let userSeq = [];

// let started = false;
// let level = 0;

// let buttons = ['red', 'green', 'yellow', 'purple'];

// let h2 = document.querySelector('h2');
// document.addEventListener('keypress', function(event){
//     if(started == false){
//         started = true;
//         console.log('Game started');
//         levelUp();
//     }
// });

// let flash = function(btn){
//     btn.classList.add('flash');

//     setTimeout(function(){
//         btn.classList.remove('flash');
//     }, 500);
// };

// let levelUp = function(){
//     level++;
//     userSeq = []; 
//     h2.innerText = `Level ${level} - पातळी ${level}`;
//     let randomIndex = Math.floor(Math.random() * 4);
//     let randomColor = buttons[randomIndex];
//     let randomBtn = document.querySelector(`.${randomColor}`);
//     gameSeq.push((randomBtn).getAttribute('id'));
//     console.log(gameSeq);
//     flash(randomBtn);
// };

// let checkResult = function(idx){
//     console.log(`Current Level ${level}`);
//     console.log(`Game: ${gameSeq}`);
//     console.log(`User: ${userSeq}`);

//     if(gameSeq[idx] === userSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             console.log("Matched");
//         h2.innerText = `Your Score ${level}`;

//             setTimeout(levelUp, 1000);
//         }
//     }
//     else{
//         console.log("Game Over!!");
//         h2.innerText = 'Game Over!! Press any key to Start';
//         reset();
//     }
// }

// let buttonPressed = function(){
//     userFlash(this);
//     let btn = this;
    
//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     console.log(userSeq);
//     checkResult(userSeq.length - 1);
// }

// let btns = document.querySelectorAll('.btn');
// for(btn of btns){
//     btn.addEventListener('click', buttonPressed);
// }

// let userFlash = function(btn){
//     btn.classList.add('greenFlash');

//     setTimeout(function(){
//         btn.classList.remove('greenFlash');
//     }, 200);
// }

// function reset() {
//     level = 0;
//     gameSeq = [];
//     userSeq = [];
//     started = false;
// }






let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let buttons = ['red', 'green', 'yellow', 'purple'];


let h2 = document.querySelector('h2')
document.addEventListener('keypress', function(event){
    if(started == false){
        started = true;
        console.log('game statred');
        levelUp();
    }

});
let start = document.querySelector('span');
start.addEventListener('click', function(event){
    if(started == false){
        started = true;
        console.log('game statred');
        levelUp();
    }

});

let flash = function(btn){
    btn.classList.add('flash');

    setTimeout(function(){
        btn.classList.remove('flash');
    }, 500)
};

let levelUp = function(){
    level++;
    userSeq = []; 
    h2.innerText = `Level ${level}`;
    let randomIndex = Math.floor(Math.random()* 4 );
    let randomColor = buttons[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push((randomBtn).getAttribute('id'));
    console.log(gameSeq);
    flash(randomBtn);

};

let checkResult = function(idx){
    console.log(`Current Level ${level}`);
    console.log(`Game: ${gameSeq}`);
    console.log(`User: ${userSeq}`);

    // let idx = level-1;
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            console.log("Matched");
            setTimeout(levelUp, 1000);
        }
    }
    else{
        console.log("Game Over!!");
        h2.innerText = 'Game Over!! Press any key to Start'
        reset();

    }

}

let buttonPressed = function(){
    userFlash(this);
    let btn = this;
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkResult(userSeq.length-1);

}

let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener('click',buttonPressed)
}



let userFlash = function(btn){
    btn.classList.add('greenFlash');

    setTimeout(function(){
        btn.classList.remove('greenFlash');
    }, 200)
}


function reset () {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;

}
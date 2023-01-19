const studyTab = document.getElementById('study');
const breakTab = document.getElementById('break');

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const playBtn = document.getElementById('play');
const resetBtn = document.getElementById('reset');

const warning = document.getElementById('warning');

let secondCount = 59;
let minuteCount = 29;

playBtn.addEventListener('click', function(){

    startTimer();
    playBtn.classList.add('hide');
    resetBtn.classList.remove('hide');
})


function startTimer(){

    
    let timer = () =>{

        seconds.innerHTML = secondCount;
        minutes.innerHTML = minuteCount;

        secondCount = secondCount - 1;

        //add 0 in front of singular digits
        if(secondCount <= 9){
            seconds.innerHTML = '0' + secondCount ;
        }


        //play warning audio
        if(secondCount === 12 && minuteCount ===0){
            playAudio();
        }


        //reset the second counter to 59 if seconds = 0
        if(secondCount === 0){

            //if minute count is not zero then decrement the value
            if(minuteCount !== 0){
                minuteCount--;
            }

            //if minute count is zero and second is zero then it's break time
            else if(minuteCount === 0){
                minuteCount = 5

                if(secondCount === 0){
                    if(minuteCount !== 0){
                        minuteCount--;
                    }
                    else{
                        minuteCount = 0;
                    }
                }

                //change the active tab to break is minutes for work is zero
                studyTab.classList.remove('active');
                breakTab.classList.add('active');

            }

            secondCount = 59
        }
        // else{
        //     secondCount--;
        // }

    }

    //decrement the counter every second
    setInterval(timer, 1000)
}


//function for playing warning audio
function playAudio(){

    let audio = new Audio('timer.wav');
    audio.play();
}


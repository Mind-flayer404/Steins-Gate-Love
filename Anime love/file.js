let btn = document.getElementById("greet");
let audio = new Audio("src/voice.mp3");
let btn1 = document.getElementById("play");
let music = new Audio("src/bgm.mp3");
let count = 0;

btn.onclick = function()
{
    audio.play();
    btn.src = "src/tuturu.jpg";
    setTimeout(restore,1800);
}

function restore()
{
    btn.src = "src/mayuri.jpg";
}

btn1.onclick = function()
{
    if(count%2==0){
        music.play();
    }
    else{
        music.pause();
    }
    count++;
}
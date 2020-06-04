function refresh() {
    window.location = "index.html";
}
function openSideBar() {
    document.getElementById("sideBar").style.marginLeft = "0";
    document.getElementById("main").style.marginLeft = "100%";
}
function hideSideBar() {
    document.getElementById("sideBar").style.marginLeft = "-100%";
    document.getElementById("main").style.marginLeft = "0";
}
var music = document.getElementById("player");


function play() { 
    if(music.paused) {
        music.play();
        document.getElementById("playIcon").style.display = "none";
        document.getElementById("pauseIcon").style.display = "inline";
    }
    else {
        music.pause();
        document.getElementById("playIcon").style.display = "inline";
        document.getElementById("pauseIcon").style.display = "none";
    }

}

//Playlist array
var mediaFiles = [
"Lukas Graham - Better Than Yourself.mp3",
"Lukas Graham - Don_t You Worry _Bout Me.mp3",
"Lukas Graham - Drunk In The Morning.mp3",
"Lukas Graham - Happy Home.mp3",
"Lukas Graham - Take The World By Storm.mp3",
"Lukas Graham - What Happened To Perfect.mp3",
"Lukas Graham - You_re Not There.mp3",
"Lukas_Graham_7_Years.mp3"
];
var i = 0;
var player = document.querySelector("#music_list audio");

function playTrack() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

   /make new track current track/
    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - Better Than Yourself.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();

}
function playTrack1() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle1").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    /make new track current track/
    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - Don_t You Worry _Bout Me.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();

}
function playTrack2() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle2").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - Drunk In The Morning.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();

}
function playTrack3() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle3").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - Happy Home.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();

}
function playTrack4() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle4").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - Take The World By Storm.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();
}
function playTrack5() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle5").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - What Happened To Perfect.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();
}
function playTrack6() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle6").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas Graham - You_re Not There.mp3";

}
function playTrack7() {
    /Get current track title and clear it/
    document.getElementById("title").innerText = "";

    /Get new track title text/
    var newTrack =  document.getElementById("trackTitle7").innerText;
    
    /Make new track title the current track title/
    document.getElementById("title").innerText = newTrack;

    document.getElementById("player").src = "";
    document.getElementById ("player").src = "Lukas_Graham_7_Years.mp3";

    /autoplay/
    var play = document.getElementById("player");
    play.play();

}
function hideMain2() {
    document.getElementById("main2").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function showMain2() {
    document.getElementById("sideBar").style.marginLeft = "-100%";
    document.getElementById("main2").style.marginLeft = "0";
}
function showMain3(){
    document.getElementById("sideBar").style.marginLeft = "-100%";
    document.getElementById("main3").style.marginLeft = "0";
}
function backtoMain2() {
    document.getElementById("main3").style.marginLeft = "-100%";
    document.getElementById("main2").style.marginLeft = "0";
}
function backtoSideBar() {
    document.getElementById("main3").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function showMain4() {
    document.getElementById("sideBar").style.marginLeft = "-100%";
    document.getElementById("main4").style.marginLeft = "0";
}
function backtoMaintwo() {
    document.getElementById("main4").style.marginLeft = "-100%";
    document.getElementById("main2").style.marginLeft = "0";
}
function backtoSideBar2() {
    document.getElementById("main4").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function showMain5() {
    document.getElementById("main5").style.marginLeft = "0";
    document.getElementById("sideBar").style.marginLeft = "-100%";
}
function backtoMaintwoi() {
    document.getElementById("main5").style.marginLeft = "-100%";
    document.getElementById("main2").style.marginLeft = "0";
}
function backtoSideBar2i() {
    document.getElementById("main5").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function showMain6() {
    document.getElementById("main6").style.marginLeft = "0";
    document.getElementById("sideBar").style.marginLeft = "-100%";
}
function backtoMaintwoii() {
    document.getElementById("main6").style.marginLeft = "-100%";
    document.getElementById("main2").style.marginLeft = "0";
}
function backtoSideBar2ii() {
    document.getElementById("main6").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function backtoSideBar2iii() {
    document.getElementById("main7").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function backtoMaintwoiii() {
    document.getElementById("main7").style.marginLeft = "-100%";
    document.getElementById("sideBar").style.marginLeft = "0";
}
function showMain7() {
    document.getElementById("main7").style.marginLeft = "0";
    document.getElementById("sideBar").style.marginLeft = "-100%";
}
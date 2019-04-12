let clockContainer 
let dateContainer
let changeColorButton 
let changeBckgrndColorButton 
let countdown
let seconds
let minutes
let minutesleft
let secondsleft
let intervalCntdwn
let menu
let timer


let app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       
        init();
    }
};

app.initialize();



function init () {
    
    clockContainer = document.querySelector('#clock')
    StyleChange = document.querySelector('#StyleChange') 
    
    console.log(clockContainer)
    dateContainer = document.querySelector('#date')
    console.log(dateContainer)
    currentDate()
    changeColorButton = document.querySelector('#change-color')
    changeBckgrndColorButton = document.querySelector('#change-bckgrnd-color')
    startClock()
  
    changeColorButton.addEventListener('click', changeColor)
    changeBckgrndColorButton.addEventListener('click', changeBckgrndColor)
   
    
    document.querySelector('#startCountdown').addEventListener('click',countdownStart)
    document.querySelector('#exit').addEventListener('click',exit)
    document.querySelector('#totimer').addEventListener('click',totimer)
    document.querySelector('#backtomenu').addEventListener('click',backtomenu)
    menu = document.querySelector('#menu')
    timer = document.querySelector('#timer')
}
function playMP3(mediaSource) {
    let src = mediaSource;
    var myMedia =
    new Media(src,
        function () { },
        function () {  }
    );
    myMedia.play();
}
function exit(){
    navigator.app.exitApp(); 
}
function totimer(){
    menu.style.display = "none"
    timer.style.display = "block"
}
function backtomenu(){
    menu.style.display = "block"
    timer.style.display = "none"
}

function countdownStart(){
    console.log("CLICKED")
    clearInterval(intervalCntdwn);
    minutes = parseInt(document.querySelector("#min").value);
    seconds = parseInt(document.querySelector("#sec").value);
    if(seconds < 60){
        let secondsRly = seconds % 60;
        let minutesAdd = (seconds - secondsRly) / 60;
        minutes += minutesAdd;
        seconds = secondsRly;

    }
    minutesleft = minutes;
    secondsleft = seconds;
    /* 
    console.log(minutes);
    console.log(seconds); */
    countdown = document.getElementById("countdown");
     
    
    
    updateTimer(minutes,seconds)
    intervalCntdwn = window.setInterval(function () {
        updateTimer(minutes,seconds)
    }, 1000)
}
function updateTimer(){
   

   
    if(secondsleft == 0){
        secondsleft = 60;
        minutesleft -=  1;
    }else{
        minutesleft = minutesleft ;
    } 
    secondsleft -= 1;
    if(minutesleft < 0){
        playMP3(cordova.file.applicationDirectory + 'www/sound/dingdong.mp3');
        countdown.innerHTML = "Finished!"
    
    }else{
        countdown.innerHTML = minutesleft + ":" + secondsleft;
    }     
  
}


    
function changeColor () {
    console.log('muudan värvi')
    let x = document.getElementById("myColor").value;
  
    clockContainer.style.color = x;
    dateContainer.style.color = x;
    document.querySelector("#timeleft").style.color = x;
    document.querySelector("#countdown").style.color = x;
}
function changeBckgrndColor () {
    console.log('muudan tausta värvi')
    let y = document.getElementById("myBckgrndColor").value;
  
    document.body.style.background  = y;
   
}
  
  
  
function startClock () {
    updateClock()
    
    window.setInterval(function () {
        updateClock()
    }, 1000)
}
  
function updateClock () {
    let date = new Date()
    let currentHours = date.getHours()
    let currentMinutes = date.getMinutes()
  
    currentHours = (currentHours < 10 ? "0" : "") + currentHours
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes
  
  
    clockContainer.innerHTML = currentHours+":"+currentMinutes
}
function currentDate(){
    let date = new Date()
  
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   
  
    dateContainer.innerHTML =date.getDate()+". "+month[date.getMonth()]+" "+date.getFullYear()
}
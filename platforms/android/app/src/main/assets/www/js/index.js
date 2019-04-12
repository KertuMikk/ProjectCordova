
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
    
   
    document.querySelector('#exit').addEventListener('click',exit)
    document.querySelector('#totimer').addEventListener('click',totimer)
    
   
    timer = document.querySelector('#timer')
}

function exit(){
    navigator.app.exitApp(); 
}
function totimer(){
    window.location.href = "timer.html";
}

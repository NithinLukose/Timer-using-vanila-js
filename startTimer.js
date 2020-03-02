const StartTimer = (function(){
    
    //cache DOM
    let hoursTab = document.getElementById('hours')
    let minsTab = document.getElementById('mins')
    let secsTab = document.getElementById('secs')
    
    let hr;
    let sec;
    let min;
    let ms;
    let timer;
    let distance;
    render(0,0,0)
    events.on('setTimer',setTimer)
    
    
    //set time.
    function setTimer(data){
        //console.log(data)
        
        clearInterval(timer)
        hr = data.hour?Number(data.hour):0;
        min = data.min?Number(data.min):0;
        sec = data.sec?Number(data.sec):0;
        
        startTimer()
        
    }
    
    //timer logic
    
    function startTimer(){
        
        ms = milliSeconds(hr,min,sec)
        distance = ms*1000
        //console.log(ms)
        timer = setInterval(timerFunc,1000)
        
        
    }
    function timerFunc(){
        
        //console.log("he")
        let d = new Date()
        let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
        let mins = Math.floor((distance%(1000*60*60))/(1000*60))
        let secs = Math.floor((distance%(1000*60))/1000)
        render(hours,mins,secs)
        
        ms--;
        distance = ms*1000
        if(ms < 0){
            //console.log("he")
            clearInterval(timer)
        }
        
    }
    function milliSeconds(hr,min,sec){
        
        return((hr*60*60 + min*60 + sec))
        
    }
    
    //render to the page
    function render(hrs,mns,scs){
        
        
        hours.innerHTML = "<h1>" + hrs + "</h1>"
        mins.innerHTML = "<h1>" + mns + "</h1>"
        secs.innerHTML = "<h1>" + scs + "</h1>"
        
        //console.log(hours)
        
        
    }
    
    
})()
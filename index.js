TimerApp = (function(){
    
    let timerDiv = document.getElementById('timer')
    let timerForm = document.getElementById("timerInput")
    //console.log(timerForm)
    let counter = 10;
    let hour = 0;
    let min = 0;
    let sec = 0;
    
    timerForm.addEventListener('submit',handleTimerSubmit)
    
    function handleTimerSubmit(event){
        
        event.preventDefault()
        //console.log(event.target.hour.value)
        hour = event.target.hour.value
        min = event.target.min.value
        sec = event.target.sec.value
        if(!hour&&!min&&!sec){
            alert("please set the timer")
        }
        else{
            let timer = {
                
                hour:hour,
                min:min,
                sec:sec,
                
            }
            //console.log("submitted")
            events.emit('setTimer',timer)
            event.target.hour.value=0
            event.target.min.value=0
            event.target.sec.value=0
            
        }
        
        
    } 
    
  
    
    
})()
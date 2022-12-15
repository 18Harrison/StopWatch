const stopWatch = document.getElementsByClassName("stopWatch")[0]
const startTag = document.getElementsByClassName("start")[0]
const pauseTag = document.getElementsByClassName("pause")[0]
const continueTag = document.getElementsByClassName("continue")[0]
const restartTag = document.getElementsByClassName("restart")[0]

let second =0,
minute = 0,
hour =0;



const startTime = () => {
    second += 1;
    if(second===60){
        second= 0;
        minute += 1;
        if(minute===60){
            minute=0;
            hour+= 1;
        }
    }
    let secondtext = second<10? "0"+second.toString() : second;
    let hourtext = hour<10? "0"+hour.toString() : hour;
    let minutetext = minute<10? "0"+minute.toString() : minute;
    

    stopWatch.textContent=hourtext+":"+minutetext +":"+secondtext
};

let IntervalId;
startTag.addEventListener("click", () =>{
    IntervalId= setInterval(startTime, 1000)
})

pauseTag.addEventListener("click", ()=> {
    clearInterval(IntervalId)
})

continueTag.addEventListener("click", ()=>{
    clearInterval(IntervalId);
    IntervalId= setInterval(startTime, 1000)
})
restartTag.addEventListener("click", ()=>{
    second =0,
    minute = 0,
    hour =0;
    
})



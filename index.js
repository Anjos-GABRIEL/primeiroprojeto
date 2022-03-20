var sec=0
var min=0
var hra=0
var interval

function doisdigitos(digit){
    if(digit<10){
        return('0'+digit)
    

    }else{
        return(digit)
    }
        
    
}

function inicio(){
  interval= setInterval(relogio,1000)
}

function pause(){
    clearInterval(interval)
     
}

function pare(){
    clearInterval(interval)
     sec=0
     min=0
     document.getElementById('relogio').innerText='00:00:00'
}

function relogio(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hra++
        }
    }
    document.getElementById('relogio').innerText=doisdigitos (hra)+':'+doisdigitos (min)+':'+doisdigitos (sec)
}


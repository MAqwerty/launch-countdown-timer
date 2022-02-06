window.onload = function () {

let Seconds = document.getElementById('Seconds')
let frontSeconds = document.getElementById('frontSeconds')
let backSeconds = document.getElementById('backSeconds')
let Secondsfront = document.getElementById('sdf')
let Secondsback = document.getElementById('sdb')

let Minutes = document.getElementById('Minutes')
let frontMinutes = document.getElementById('frontMinutes')
let backMinutes = document.getElementById('backMinutes')
let Minutesfront = document.getElementById('mdf')
let Minutesback = document.getElementById('mdb')

let Hours = document.getElementById('Hours')
let frontHours = document.getElementById('frontHours')
let backHours = document.getElementById('backHours')
let Hoursfront = document.getElementById('hdf')
let Hoursback = document.getElementById('hdb')

let Days = document.getElementById('Days')
let frontDays = document.getElementById('frontDays')
let backDays= document.getElementById('backDays')
let Dayfront = document.getElementById('ddf')
let Dayback = document.getElementById('ddb')


setInterval(timer,1000)


let timeSeconds = 20

let timeMinutes = 1

let timeHours = 00

let timeDays = 00


//....................alerts...........................//

if(timeSeconds<=-1 || timeSeconds>60 ){
    alert('timeSeconds is not a logical number')
}
if(timeMinutes<=-1 || timeMinutes>60 ){
    alert('timeMinutes is not a logical number')
}
if(timeHours<=-1 || timeHours>24 ){
    alert('timeHours is not a logical number')
}
if(timeDays<=-1 || timeDays>99 ){
    alert('timeDays is not a logical number')
}

//........................default.........................//


if(timeSeconds==0){
    Secondsfront.style.animation= "none"
    Secondsback.style.animation= "none"
}

if(timeMinutes==0){
    Minutesfront.style.animation= "none"
    Minutesback.style.animation= "none"
}
if(timeHours==0){
    Hoursfront.style.animation= "none"
    Hoursback.style.animation= "none"
}
if(timeDays==0){
    Dayfront.style.animation= "none"
    Dayback.style.animation= "none"
}


// .........................SECONDS..........................//

    
    function FSeconds(){

        if ( timeSeconds>=0 ){
            Seconds.innerText = timeSeconds.toString().padStart(2, "0");
            frontSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
            backSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
            timeSeconds--;
        }

        if(timeSeconds==0 && (timeMinutes>0 || timeHours>0 || timeDays>0) ){
            timeSeconds=60
            timeMinutes--
        }

       
        if(timeSeconds==0 && !(timeDays>0 || timeHours>0 || timeMinutes>0)  ){
        Secondsfront.style.animation= "none"
        Secondsback.style.animation= "none"
       }
        
        
    }
    Seconds.innerText = timeSeconds.toString().padStart(2, "0");
    frontSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
    backSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;


// .........................MINUTES..........................//


    function FMinutes(){

        if(timeMinutes>=0){
        Minutes.innerText = timeMinutes.toString().padStart(2, "0");
        frontMinutes.innerText = timeMinutes.toString().padStart(2, "0");
        backMinutes.innerText = timeMinutes.toString().padStart(2, "0");
        timeMinutes--
        }

        if(timeMinutes==0 && (timeHours>0 || timeDays>0) ){
        timeMinutes=60
        }

        if(timeMinutes==0 && !(timeDays>0 || timeHours>0) ){
        Minutesfront.style.animation= "none"
        Minutesback.style.animation= "none"
        }
      
      
    }

    Minutes.innerText = timeMinutes.toString().padStart(2, "0");
    frontMinutes.innerText = timeMinutes.toString().padStart(2, "0");
    backMinutes.innerText = timeMinutes.toString().padStart(2, "0");


// .........................HOURS..........................//


    function FHours(){

        if(timeHours>=0){
        Hours.innerText = timeHours.toString().padStart(2, "0");
        frontHours.innerText = timeHours.toString().padStart(2, "0");
        backHours.innerText = timeHours.toString().padStart(2, "0");
        timeHours--
        }

    
        if(timeHours==0 && (timeDays>0) ){
        timeHours=24
        }

        if(timeHours==0 && !(timeDays>0) ){
        Hoursfront.style.animation= "none"
        Hoursback.style.animation= "none"

        }  
        
    }

    Hours.innerText = timeHours.toString().padStart(2, "0");
    frontHours.innerText = timeHours.toString().padStart(2, "0");
    backHours.innerText = timeHours.toString().padStart(2, "0");


// .......................DAY.......................//

    
    function FDays(){
   
        if(timeDays>=0){
            Days.innerText = timeDays.toString().padStart(2, "0");
            frontDays.innerText = timeDays.toString().padStart(2, "0");
            backDays.innerText = timeDays.toString().padStart(2, "0");
            timeDays--
        }

        if(timeDays==0){
            Dayfront.style.animation= "none"
            Dayback.style.animation= "none"
        }
    }

    Days.innerText = timeDays.toString().padStart(2, "0");
    frontDays.innerText = timeDays.toString().padStart(2, "0");
    backDays.innerText = timeDays.toString().padStart(2, "0");
    

//.............................MAIN function IS TIMER..........................//
    

function timer (){


        if ( timeSeconds>=0 ){
            timeSeconds--;
            Seconds.innerText = timeSeconds.toString().padStart(2, "0");
            frontSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
            backSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
           
        }

        if(timeSeconds<0 && (timeMinutes>0 || timeHours>0 || timeDays>0) ){
            timeSeconds=59;

            Seconds.innerText = timeSeconds.toString().padStart(2, "0");
            frontSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;
            backSeconds.innerText = timeSeconds.toString().padStart(2, "0") ;

            if(timeMinutes>=0){
                timeMinutes--
                Minutes.innerText = timeMinutes.toString().padStart(2, "0");
                frontMinutes.innerText = timeMinutes.toString().padStart(2, "0");
                backMinutes.innerText = timeMinutes.toString().padStart(2, "0");  
              
                }
        
                if(timeMinutes<0 && (timeHours>0 || timeDays>0) ){
                timeMinutes=59;

                Minutes.innerText = timeMinutes.toString().padStart(2, "0");
                frontMinutes.innerText = timeMinutes.toString().padStart(2, "0");
                backMinutes.innerText = timeMinutes.toString().padStart(2, "0");

                           if(timeHours>=0){
                            timeHours--
                           Hours.innerText = timeHours.toString().padStart(2, "0");
                           frontHours.innerText = timeHours.toString().padStart(2, "0");
                           backHours.innerText = timeHours.toString().padStart(2, "0");
                        }
    
        
                           if(timeHours<0 && (timeDays>0) ){

                            timeHours=23
                                
                            Hours.innerText = timeHours.toString().padStart(2, "0");
                            frontHours.innerText = timeHours.toString().padStart(2, "0");
                            backHours.innerText = timeHours.toString().padStart(2, "0");

                                         if(timeDays>0){
                                            timeDays--
                                        Days.innerText = timeDays.toString().padStart(2, "0");
                                        frontDays.innerText = timeDays.toString().padStart(2, "0");
                                        backDays.innerText = timeDays.toString().padStart(2, "0");                          
                                        }
                    
                                       if(timeDays==0){
                                            Dayfront.style.animation= "none"
                                            Dayback.style.animation= "none"
                                        }
                            }
    
                            if(timeHours==0 && !(timeDays>0) ){
                                Hoursfront.style.animation= "none"
                                Hoursback.style.animation= "none"
                            }  
                }
        
                if(timeMinutes==0 && !(timeDays>0 || timeHours>0) ){
                    Minutesfront.style.animation= "none"
                    Minutesback.style.animation= "none"
                }
              
        }

            if(timeSeconds==-1 && !(timeDays>0 || timeHours>0 || timeMinutes>0)  ){
                Secondsfront.style.animation= "none"
                Secondsback.style.animation= "none"
            }

            if(timeSeconds==-1){
                Seconds.innerText = "00";
                frontSeconds.innerText = "00" ;
                backSeconds.innerText = "00"
            }
    }



}

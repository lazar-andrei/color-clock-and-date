
var ceasHandle;

var dateHandle;

     
function colorClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    if (hours <= 9) {
      hours = '0' + hours;
    }
    if (minutes <= 9) {
      minutes = '0' + minutes;
    }
    if (seconds <= 9) {
      seconds = '0' + seconds;
    }
  
    var clockFace = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('clock').innerHTML = clockFace;
        
    var hexColor = '#' + '99' + minutes + 1.65*seconds;
    
    document.getElementById('container').style.background = hexColor;
    
    clearTimeout(dateHandle);
    ceasHandle=setTimeout(function() {
        colorClock();
      }, 1000);
   
    
  }


function showDate(){
    var date = new Date();
    var day= date.getDay();
    var month= date.getMonth();
    var year= date.getFullYear();
     
    if (day <= 9) {
        day = '0' + day;
      }
      if (month <= 9) {
        month = '0' + month;
      }

    var exactDate= day + '/' + month + '/' + year;
    document.getElementById('clock').innerHTML = exactDate;
    
   clearTimeout(ceasHandle);
   dateHandle=setTimeout(function() {
    showDate();
  }, 1000);
  
}
  
  colorClock();
  

  
  
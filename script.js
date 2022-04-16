function showTime(){
  
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    var session = "PM";  
    
    if(h == 0){
        h = 24;
        session ="AM"
    }
    
    if(h > 24){
        h = h - 24;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("Digitalclock").innerText = time;
    document.getElementById("Digitalclock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
//showDay();
showTime();
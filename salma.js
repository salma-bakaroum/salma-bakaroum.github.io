 
 
 
  

function afficheH(){
    maDate=new Date();
    h=maDate.getHours();
    m=maDate.getMinutes();
    s=maDate.getSeconds();
    document.getElementById('111').innerHTML=h+':'+m+':'+s
}
setInterval(afficheH,1000);


 

 function openCity(evt, cityName) {
 var i, tabcontent, tablinks;
 tabcontent = document.getElementsByClassName("tabcontent");
 for (i = 0; i < tabcontent.length; i++) {
 tabcontent[i].style.display = "none";
 }
 tablinks = document.getElementsByClassName("tablinks");
 for (i = 0; i < tablinks.length; i++) {
 tablinks[i].className = tablinks[i].className.replace(" active", "");
                  }
 document.getElementById(cityName).style.display = "block";
 evt.currentTarget.className += " active";
                }                 




 
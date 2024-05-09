function openOverlay() {
    document.getElementById('overlay').style.display = 'block';
  }
  
  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
  

  window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Erfan');

    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1NVQTDcU5c5htJ_KWowbRmnqlNs9gXicr/preview";
        document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Francisca');

    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1RsO2YZayTBRDMvgI2fpUGZuljkYCtmBq/preview";
        document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Momo');
    
    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1_VIvqIN79PeE0p9SLxh1ftJjjeMfju2H/preview";
        document.getElementById('overlay').style.display = 'block';});
});

function openOverlay() {
    document.getElementById('overlay').style.display = 'block';
  }
  
  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
  

  window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Erfan');

    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1Wz9m-QCPkDnt7v-9ErkWaObvsCB7PyKS/preview";
        document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Francisca');

    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1uEP3er8PiaJ24ljoblwLaBaYnoZcJwSj/preview";
        document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Momo');
    
    neededitem.addEventListener("click", ()=>{
        document.getElementById("player").src = "https://drive.google.com/file/d/1hA_96bfeCl4SYfd89hFbPTKLFGEMn0CT/preview";
        document.getElementById('overlay').style.display = 'block';});
});
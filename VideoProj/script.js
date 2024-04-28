function openOverlay() {
    document.getElementById('overlay').style.display = 'block';
  }
  
  function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
  

  window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Erfan');

    neededitem.addEventListener("click", ()=>{document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Francisca');

    neededitem.addEventListener("click", ()=>{document.getElementById('overlay').style.display = 'block';});
});

window.addEventListener("DOMContentLoaded", (event)=>{
    let neededitem = document.getElementById('Momo');

    neededitem.addEventListener("click", ()=>{document.getElementById('overlay').style.display = 'block';});
});
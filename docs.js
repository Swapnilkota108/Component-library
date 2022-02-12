const btn = document.querySelector("#modal-activate");
const modal = document.querySelector(".modal");
const modelClose = document.querySelector("#modal-close");

      btn.addEventListener("click",()=>{
         modal.style.display = "block";
      })
      modelClose.addEventListener("click",()=>{
         modal.style.display = "none";
      })
      
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

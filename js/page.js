let list = document.getElementById("list");
let toggle=document.querySelector(".list .fas");
toggle.addEventListener("click", ()=>{
    list.classList.toggle("open");
    toggle.style.opacity=.7;
    toggle.style.fontSize="30px";
    toggle.style.right="50px";
    toggle.style.zIndex=4;

})





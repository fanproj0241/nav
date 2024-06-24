const menuBtn = document.querySelector("#menuButton");
const list = document.querySelector("#list");
const cancel = document.querySelector("#cancel")

menuBtn.addEventListener("click", function() {
    list.style.display = "flex"
    menuBtn.style.display = "none"
    cancel.style.display = "flex"
})


cancel.addEventListener("click", function(){
    cancel.style.display = "none"
    list.style.display = "none"
    menuBtn.style.display = "flex"
})
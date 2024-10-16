var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
var flag = 0

btn.addEventListener("click",function(){
    if(flag === 0){
        istatus.innerHTML = "Friends"
        btn.innerHTML = "Remove Friend"
        istatus.style.color = "green"
        flag = 1
    }else{
        istatus.innerHTML = "Stranger"
        btn.innerHTML = "Add Friend"
        istatus.style.color = "red"
        flag = 0
    }
    
})

var elem = document.querySelectorAll(".elem")
var elemImage = document.querySelector("#elem1 img")
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(dets){
     ele.childNodes[3].style.opacity = 1
    })
    ele.addEventListener("mouseleave",function(dets){
        ele.childNodes[3].style.opacity = 0
           
    })
    ele.addEventListener("mousemove",function(dets){
        ele.childNodes[3].style.left = dets.x + "px"
        ele.childNodes[3].style.left = dets.x + "px"
           
    })
})



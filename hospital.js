let menu = document.getElementById("menu");
let bar = document.getElementById("bar");
 



bar.onclick = function(){
    menu.classList.toggle("active");
    bar.classList.toggle("fa-times");

}

window.onscroll = function(){
    menu.classList.remove("active");
    bar.classList.remove("fa-times");
}

function topUp (){
    let top = document.getElementById("top");
    window.onscroll=function(){
        if (window.scrollY  >= 350){
            top.style.display="block";
        }
        else {
            top.style.display="none"
        }
    }
    
    top.onclick = function () {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
}

topUp();
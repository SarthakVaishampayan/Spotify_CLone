console.log("hello")
let home_button=document.getElementById("home")
let search_button=document.getElementById("search")
let library_button =document.getElementById("library_button")

home_button.addEventListener(('click'),()=>{
 home_button.innerHTML= '<img style="height: 23px;" src="img/home2.svg" alt=""><div class="left1_child">Home</div>'
 search_button.innerHTML='<img style="height: 23px;" src="img/search1.svg" alt=""><div style="color:rgba(255, 255, 255, 0.704);" class="left1_child" >Search</div>'
 document.querySelector(".left1").children[0].style.color="rgba(255, 255, 255)"
 document.querySelector(".left1").children[1].style.color="rgba(255, 255, 255, 0.704)"
})

search_button.addEventListener(('click'),()=>{
 home_button.innerHTML= '<img style="height: 23px;" src="img/home1.svg" alt=""><div style="color:rgba(255, 255, 255, 0.704);" class="left1_child">Home</div>'
 search_button.innerHTML='<img style="height: 23px;" src="img/search2.svg" alt=""><div class="left1_child" >Search</div>'
 document.querySelector(".left1").children[0].style.color="rgba(255, 255, 255, 0.704)"
 document.querySelector(".left1").children[1].style.color="rgba(255, 255, 255)"
})

library_button.addEventListener(('click'),()=>{
    document.querySelectorAll(".left1_child")[0].classList.toggle('toggle_library')
    document.querySelectorAll(".left1_child")[1].classList.toggle('toggle_library')
    document.querySelector(".left2_child").children[1].classList.toggle('toggle_library')
    document.querySelector(".left2_child").children[2].classList.toggle('toggle_library')
    document.querySelector(".left2_child").children[3].classList.toggle('toggle_library')

    if(library_button.innerHTML=='<img style="height:23px ;" src="img/library2.svg" alt="library">'){
        library_button.innerHTML='<img style="height:23px ;" src="img/library1.svg" alt="library">'
            document.querySelector(".left").style.width="4.2vw"
            document.querySelector(".right").style.width="94vw" 
            document.querySelector(".left1").getElementsByTagName("button")[0].style.width="30px"
            document.querySelector(".left1").getElementsByTagName("button")[1].style.width="30px"
    }
    else if(library_button.innerHTML=='<img style="height:23px ;" src="img/library1.svg" alt="library">'){
        library_button.innerHTML='<img style="height:23px ;" src="img/library2.svg" alt="library">'
            document.querySelector(".left").style.width="23.5vw"
            document.querySelector(".right").style.width="77vw" 
            document.querySelector(".left1").getElementsByTagName("button")[0].style.width="200px"
            document.querySelector(".left1").getElementsByTagName("button")[1].style.width="200px"
            
    }
   
   
    
})




























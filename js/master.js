//to open the sidebar of sitting & make the icon rotate
let box=document.querySelector(".settings-box");
let icon=document.querySelector(".fa-gear")
icon.addEventListener("click",function() {
    icon.classList.toggle("fa-spin")
    box.classList.toggle("opened");
})
//to make the clicked color have active class & change the color root to that color
let colorslist=document.querySelectorAll(".colors-list li");
colorslist.forEach(li=>{
    li.addEventListener("click",(e)=> {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        window.localStorage.setItem("color",e.target.dataset.color)
        colorslist.forEach(li=>{
            li.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})
//to set the color in storage after reloud
if(window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"))
    colorslist.forEach(li=>{
        li.classList.remove("active");
        if(li.dataset.color===localStorage.getItem("color")) {
            li.classList.toggle("active");
        }
    })
}
let backgroundinterval;
let random=true
//to make active class on the clicked item & set it in storage
let backgroundel=document.querySelectorAll(".background span");
backgroundel.forEach((span)=>{
    span.addEventListener("click",(span)=>{
        backgroundel.forEach((span)=>{
            span.classList.remove("active")
        })
        span.target.classList.add("active")
        window.localStorage.setItem("background",span.target.dataset.background)
        if(localStorage.getItem("background")==="yes") {
            random=true;
            randomeimage();
        }else{
            random=false;
            randomeimage()
        }
    })
})
//to set the state in storage after reloud
if(localStorage.getItem("background")) {
    backgroundel.forEach((span)=>{
        span.classList.remove("active")
        if(localStorage.getItem("background")===span.dataset.background) {
            span.classList.add("active")
        }
    })
    if(localStorage.getItem("background")==="yes") {
        random=true;
        randomeimage();
    }else{
        random=false;
        clearInterval(backgroundinterval)
    }
}else {
    random=true;
    randomeimage();
}

let landingpage =document.querySelector(".landing");
let imagesarray=["images (1).jpg","images (2).jpg","website-background-sdki780prxb1nfs5.jpg","images.jpg","download (5).jpg"];
//fun. to change the background
function randomeimage () {
    if(random===true) {
        backgroundinterval= setInterval(()=>{
            let num=Math.floor(Math.random()*imagesarray.length);       
            landingpage.style.backgroundImage='url("images/'+imagesarray[num]+'")';
        },4000)
        
    }else {
        clearInterval(backgroundinterval)
    }
}

let ourGallery=document.querySelectorAll(".gallery img");
ourGallery.forEach(img=> {
    img.addEventListener("click",(e)=>{
        let ouverlay=document.createElement("div");
        ouverlay.className="popup-overlay"
        document.body.appendChild(ouverlay);
        let popupBox=document.createElement("div")
        popupBox.className="popup-box"
        if(img.alt !== null) {
            let althead=document.createElement("h3");
            althead.style.textAlign="center"
            althead.style.marginTop="0"
            let alttext=document.createTextNode(img.alt)
            althead.appendChild(alttext)
            popupBox.appendChild(althead)
        }
        let popupimage=document.createElement("img")
        popupimage.src=img.src;
        popupBox.appendChild(popupimage)
        document.body.appendChild(popupBox)
        let close=document.createElement("span")
        let spantext=document.createTextNode("close")
        close.appendChild(spantext)
        popupBox.appendChild(close)
        close.addEventListener("click",(e)=>{
            ouverlay.classList.remove("popup-overlay")
            popupBox.classList.remove("popup-box")
            popupBox.style.display="none"
        })
    })
})

let bullets=document.querySelectorAll(".nav-bullets .bullet");
bullets.forEach((bullet)=>{
    bullet.addEventListener("click",(bullet)=>{
        document.querySelector(bullet.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    })                                                                
})
let links=document.querySelectorAll(".links li a")
links.forEach((link)=>{
    link.addEventListener(("click"),(link)=>{
        document.querySelector(link.target.dataset.select).scrollIntoView({
            behavior:'smooth'
        })
    })
})

let showbullets=document.querySelectorAll(".bullets span");
let navbullets=document.querySelector(".nav-bullets")
showbullets.forEach((bull)=>{
    bull.addEventListener("click",(bull)=>{
        showbullets.forEach((bul)=>{
            bul.classList.remove("active")
        })
        bull.target.classList.add("active")
        window.localStorage.setItem("bull",bull.target.dataset.bull)
        if(bull.target.dataset.bull==="yes") {
            navbullets.style.display="block"
        }else {
            navbullets.style.display="none"
        }
    })
})

if(window.localStorage.getItem("bull")) {
    if(window.localStorage.getItem("bull")==="yes") {
        navbullets.style.display="block"
    }else {
        navbullets.style.display="none"
    }
    showbullets.forEach((bull)=>{
        bull.classList.remove("active")
        if(bull.dataset.bull===window.localStorage.getItem("bull")) {
            bull.classList.add("active")
        }
    })
}

document.querySelector(".reset").onclick=function() {
    window.localStorage.removeItem("bull")
    window.localStorage.removeItem("color")
    window.localStorage.removeItem("background")
    window.location.reload()
}
let link=document.querySelector(".links")
let icons=document.querySelector(".icon")
icons.addEventListener("click",function() {
    link.classList.toggle("clicked")
})

document.addEventListener("click",(e)=>{
    if(link.classList.contains="clicked") {
        document.addEventListener("click",(e)=>{
            if(e!=link) {
                link.classList.remove("clicked")
            }
        })
    }else {
        icons.addEventListener("click",()=>{
            link.classList.add("clicked")
        })
    }
})
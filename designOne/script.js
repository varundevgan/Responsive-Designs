const toggleBtn = document.getElementById('btn')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const navbar = document.getElementById('navbar')
const img = document.querySelector('img')
const slider = document.getElementById('slider')
let pageY = 0


window.addEventListener('scroll',()=>{
    if(window.pageYOffset > pageY && window.pageYOffset > 80){
        navbar.classList.add('-translate-y-full')
    }
    else {
        navbar.classList.remove('-translate-y-full')
    }
    pageY = window.pageYOffset

})

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768){
        sidebar.classList.add('-translate-x-full')
        overlay.classList.add('hidden')
    }
})

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('bg-blue-400')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click',()=>{
    sidebar.classList.add('-translate-x-full')
    overlay.classList.add('hidden')
})







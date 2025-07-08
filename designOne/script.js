const toggleBtn = document.getElementById('btn')
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')

console.log(window.screen)
console.log(window.innerWidth)

window.addEventListener('resize',()=>{
    if(window.innerWidth >= 768){
        sidebar.classList.add('-translate-x-full')
        overlay.classList.add('hidden')
    }
})

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.remove('-translate-x-full')
    overlay.classList.remove('hidden')
})

overlay.addEventListener('click',()=>{
    sidebar.classList.add('-translate-x-full')
    overlay.classList.add('hidden')
})
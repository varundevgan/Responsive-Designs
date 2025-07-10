const smallSearch = document.querySelector('.small-search')

smallSearch.addEventListener('click',()=>{
    smallSearch.style.display = 'none'
    document.querySelector('.input').style.display = 'flex'
    document.querySelector('.left-nav').style.display = 'none'
    document.querySelector('.outer').style.display = 'block'


})

document.querySelector('.outer').addEventListener('click',()=>{
    smallSearch.style.display = 'flex'
    document.querySelector('.input').style.display = 'none'
    document.querySelector('.left-nav').style.display = 'flex'
    document.querySelector('.outer').style.display = 'none'
})
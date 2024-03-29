document.addEventListener('DOMContentLoaded', function(){

    const ham = document.getElementById('hamburger')
    const menu = document.getElementById('navmenu')

    ham.addEventListener('click', ()=>{
        menu.classList.toggle('show')
        menu.classList.toggle('hide')
    })
})
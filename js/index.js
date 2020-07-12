const mybars = document.querySelector('#mybars')
const cancel = document.querySelector('#cancel')
const bg = document.querySelector('.bg-container')
const mylist = document.querySelector('.list-container')
// const navcontainer = document.querySelector('.nav-container')

cancel.addEventListener('click', () => {
    mylist.classList.add('remove')
    bg.classList.add('remove2')
})

mybars.addEventListener('click', () => {
    mylist.classList.remove('remove')
    bg.classList.remove('remove2')
})

window.addEventListener("scroll", function(){
    var header = document.querySelector('.nav-container');
    header.classList.toggle("sticky", window.scrollY > 0)
})


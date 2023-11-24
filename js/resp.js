burger = document.querySelector('.burger')
navBar = document.querySelector('.navBar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navBar.classList.toggle('h-nav-resp');

})
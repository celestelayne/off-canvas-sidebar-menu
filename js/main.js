console.log("this works")

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close')

const openMenu = () => {
  console.log('open menu click')
  sidebar.classList.toggle('active');
}

const closeMenu = () => {
  console.log('close menu click')
  sidebar.classList.toggle('active');
}

hamburger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

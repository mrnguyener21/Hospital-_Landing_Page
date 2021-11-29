const navBarLinks = document.querySelectorAll('.navBarLink');
const searchBar = document.querySelector('.searchBar');
const logIn = document.querySelector('.logInContainer')
const cardButtons = document.querySelectorAll('.cardButton')

const alertText = 'Currently this project is a single page landing page. Additional Pages may be added in the future'

for (let i = 0; i < navBarLinks.length; i++) navBarLinks[i].addEventListener('click', () => alert(alertText))
    
searchBar.addEventListener('keypress', (e) =>{if (e.keyCode === 13)alert(alertText)})

logIn.addEventListener('click', () =>  alert(alertText))

for (let i = 0; i < cardButtons.length; i++) cardButtons[i].addEventListener('click', () => alert(alertText))

import { navBarModule } from "./modules/navBar.js"
import { footerModule } from "./modules/footer.js"
/* NavBar */
let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.insertAdjacentHTML('afterbegin',navBarModule)
})

/* Footer */
let footerContainer = document.querySelector('footer')

window.addEventListener('load', ()=>{
    footerContainer.innerHTML = footerModule
})
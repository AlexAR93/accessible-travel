import { brandsSlider } from "../modules/brands-slider.js";
import sliderLatestNew from "../modules/latest-new.js";
import { fetchData } from "../modules/fetch-data.js";
import { navBarModule } from "../modules/navBar.js"
import { footerModule } from "../modules/footer.js"

const loadHomePage = async () => {
  const dbInfo = await fetchData();

  sliderLatestNew(dbInfo.services.lodging);
  brandsSlider(dbInfo.brands);
};

loadHomePage();


/* NavBar */
let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.innerHTML = navBarModule
})

/* Footer */
let footerContainer = document.querySelector('footer')

window.addEventListener('load', ()=>{
    footerContainer.innerHTML = footerModule
})
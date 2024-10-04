import { brandsSlider } from "../modules/brands-slider.js";
import { fetchData } from "../modules/fetch-data.js";
import lodgingCards from "../modules/lodging-card.js";

const filter=document.getElementById('filter');


const dbInfo = await fetchData();

lodgingCards(dbInfo.services.lodging)
brandsSlider(dbInfo.brands);

document.getElementById('filter').addEventListener('submit', (e) => {
    e.preventDefault();

    const lodgingType = e.target.lodgingType.value;
    const location = e.target.location.value;
    const currencyARS = e.target.currencyARS.checked;
    const currencyUSD = e.target.currencyUSD.checked;
    
    let newData;

    // Filtrar tipo de moneda
    if (currencyARS && !currencyUSD) {
        newData = dbInfo.services.lodging.filter(l => l.currency == "ARS");
    } else if (currencyUSD && !currencyARS) {
        newData = dbInfo.services.lodging.filter(l => l.currency == "USD");
    } else if (currencyARS || currencyUSD) {
        newData = dbInfo.services.lodging;
    } else {
        newData = dbInfo.services.lodging;
    }

    // Filtrar por tipo de hospedaje
    if (lodgingType.length > 0) {
        newData = newData.filter(l => l.type == lodgingType);
    }
    // Filtrar por ubicación
    if (location.length > 0) {
        newData = newData.filter(l => l.location === location);
    }

    // Mostrar los resultados filtrados, o todos en su defecto
    lodgingCards(newData.length >= 0 ? newData : dbInfo.services.lodging);
});


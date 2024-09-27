import { fetchLodgingById } from "../modules/fetch-data.js";

export const detailLayout=async()=>{
     // Función para obtener parámetros de la URL
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const lodgingId = getUrlParameter('id');

    const currentLodging=await fetchLodgingById(lodgingId);
    console.log(currentLodging)

    // Cargar los detalles en el contenedor
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = `
        <h2>${currentLodging.location}</h2>
        <img src="${currentLodging.images[0]}" alt="${currentLodging.location}" class="img-fluid">
        <p>${currentLodging.description}</p>
    `;
}
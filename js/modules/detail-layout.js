import { fetchLodgingById } from "../modules/fetch-data.js";

export const detailLayout = async () => {
    const getUrlParameter = (name) => new URLSearchParams(window.location.search).get(name);
    const lodgingId = getUrlParameter('id');
    const currentLodging = await fetchLodgingById(lodgingId);

    const detailContainer = document.getElementById('detail-container');
    let content = '';

    if (currentLodging && currentLodging.images.length > 0) {
        content += `
            <div id="carouselExampleIndicators" class="carousel slide col-12 col-md-6 align-self-start" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${currentLodging.images.map((_, i) => `
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${i === 0 ? 'active' : ''}" aria-current="${i === 0 ? 'true' : 'false'}" aria-label="Slide ${i + 1}"></button>
                    `).join('')}
                </div>
                <div class="carousel-inner">
                    ${currentLodging.images.map((image, i) => `
                        <div class="carousel-item ${i === 0 ? 'active' : ''}">
                            <img class="d-block w-100" src="${image}" alt="Image ${i}" class="img-fluid">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;
    } else {
        content += `<p>No hay imágenes disponibles.</p>`;
    }

    if (currentLodging) {
        content += `
            <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-between text-center">
                <h2 class="fs-1">${currentLodging.location}</h2>
                <p>${currentLodging.description}</p>
                <ul>
                    ${currentLodging.nearbyAttractions.map(attraction => `<li>${attraction.name} - ${attraction.distance} de distancia</li>`).join('')}
                </ul>
                <p>Puntuación: ${currentLodging.score}</p>
                <h5>Detalles de habitación</h5>
                <p>Tipo de habitación: ${currentLodging.roomDetails.roomType}</p>
                <p>Camas: ${currentLodging.roomDetails.beds}</p>
                <p>Capacidad para ${currentLodging.roomDetails.maxGuests} personas</p>
                <h5>Servicios incluidos</h5>
                <p class="text-center">${currentLodging.services.join(' - ')}</p>
                <h5>Precio por noche</h5>
                <p>${currentLodging.currency}: <span class="text-primary">${currentLodging.pricePerNight}</span></p>
                <div class="d-flex gap-2">
                    <button class="btn btn-secondary" onclick="alert('Reservado')">Reservar</button>
                    <a href="https://www.google.com/maps?q=${currentLodging.gps.latitude},${currentLodging.gps.longitude}" target="_blank" class="btn btn-secondary">
                        Ver en el mapa
                    </a>
                    <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Consultar</button>
                </div>
            </div>
        `;
    }

    detailContainer.innerHTML = content;
};

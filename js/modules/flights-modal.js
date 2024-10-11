export const flightsModal=(flights)=>{
    const modalBody=document.getElementById('modal-body');
    modalBody.innerHTML='';
    flights.forEach(flight => {
        let flightClass;
        if(flight.availability==false){
            flightClass="text-bg-danger";
        }else if(flight.class=='First Class'){
            flightClass="text-bg-warning";
        }else if(flight.class=='Economy'){
            flightClass="text-bg-light";
        }else if(flight.class=='Business'){
            flightClass="text-bg-dark";
        }
        const divContainer=`
            <div class="card text-center p-1 ${flightClass}">
                <h4>${flight.departure.city} - ${flight.destination.city}</h4>
                <h5>${flight.airline}</h5>
                <p>${flight.departure.time} - ${flight.destination.time}</p>
                <p>Llegada estimada en: <b>${flight.duration}</b></p>
                <p>$${flight.price} ${flight.currency}</p>
                <button class="btn btn-secondary">Reservar</button>
            </div>
            `;

        modalBody.innerHTML+=divContainer;
    });
    flights.length<1&&(  modalBody.innerHTML='No existen vuelos para esta Búsqueda')
}
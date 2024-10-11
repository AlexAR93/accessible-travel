import { brandsSlider } from "../modules/brands-slider.js";
import { fetchData } from "../modules/fetch-data.js";
import { flightsModal } from "../modules/flights-modal.js";

const flightsForm=document.getElementById('flights-form');

const dbInfo = await fetchData();

brandsSlider(dbInfo.brands);


flightsForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const originCitySelected=e.target.origin.value;
    const destinationCitySelected=e.target.destination.value;
    const classSelected=e.target.class.value;
    let departureDate=new Date(e.target.departureDate.value);
    console.log(e.target.departureDate.value)
    //* Debo sumar 1 porque al usar new Date con lo que trae del form, me resta 1 día
    departureDate.setDate(departureDate.getDate()+1);
    departureDate=departureDate.toLocaleDateString();
 
    //!

    let newData=dbInfo.services.flights.filter(f => f.departure.city == originCitySelected && f.destination.city == destinationCitySelected);


    classSelected != "all"&&(newData=newData.filter(f=>f.class == classSelected));

    departureDate != "Invalid Date"&&(newData=newData.filter(f=>new Date(f.departure.time).toLocaleDateString() == departureDate));

    newData.forEach(flight => {
        console.log(new Date(flight.departure.time).toLocaleDateString());
    });
   
    //!
    flightsModal(newData);
})


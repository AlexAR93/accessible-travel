const divContainer=document.getElementById('lodging-container');

export default function lodgingCards(lodgings){
    divContainer.innerHTML="";
    lodgings.forEach((lodging,i) => {
        // Crear elementos que ingresaremos al DOM
        const article=document.createElement('article');
        const a=document.createElement('a');
        const div=document.createElement('div');
        const img=document.createElement('img');
        const tittle=document.createElement('h2');
        const p=document.createElement('p');

        article.setAttribute('id',`product${i}`)
        tittle.innerHTML=lodging.location
        a.innerHTML='Detalles'

        // Redirigir al HTML de detalle
        a.setAttribute('href', `detalle.html?id=${lodging.id}`);
    
        img.setAttribute('src',lodging.images[0]);
        img.setAttribute('alt',lodging.location);
     
        p.innerHTML=`${lodging.description}`;

        article.appendChild(img);
        div.appendChild(tittle);
        div.appendChild(p);
        article.appendChild(div);
        article.appendChild(a);
        article.classList.add('lodging-card');

        a.classList.add('btn','btn-secondary');
     
        divContainer.appendChild(article)  ;
    });
}
const divContainer=document.getElementById('popular-destinations-slider');

export default function sliderLatestNew(lodgings){
    lodgings.forEach((lodging,i) => {
        const article=document.createElement('article');
        const a=document.createElement('a');
        const div=document.createElement('div');
        const img=document.createElement('img');
        const tittle=document.createElement('h2');
        const p=document.createElement('p');

        // ! Que solo se muestren los ultimos 9 hospedajes
        lodging.id>=lodgings.length-9&&(
        article.setAttribute('id',`product${i}`),
        tittle.innerHTML=lodging.location,
        a.innerHTML='Detalles',
    
        img.setAttribute('src',lodging.images[0]),
        img.setAttribute('alt',lodging.location),
     
        p.innerHTML=`${lodging.description}`,

        article.appendChild(img),
        div.appendChild(tittle),
        div.appendChild(p),
        article.appendChild(div),
        article.appendChild(a),
        article.classList.add('swiper-slide'),

        a.classList.add('btn','btn-secondary'),
     
        divContainer.appendChild(article)  
    )
    });
}
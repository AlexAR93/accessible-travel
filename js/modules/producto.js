// producto.js
async function cargarProducto(productId) {
    try {
        const response = await fetch('../assets/db.json');
        const data = await response.json();

        const container = document.querySelector('#producto-container');
        const producto = data.services.lodging.find(item => item.id === productId);

        if (producto) {
            const img = document.createElement('img');
            const productoDiv = document.createElement('div');
            const location = document.createElement('h2');
            const type = document.createElement('h3');
            const pricePerNight = document.createElement('p');
            const servicesList = document.createElement('ul');

           
            img.src = producto.images; 
            img.alt = `Imagen de ${producto.location}`;
            img.style.width = '600px'; 
            img.style.height = 'auto'; 

            location.innerText = `Lugar: ${producto.location}`;
            type.innerText = `Tipo: ${producto.type}`;
            pricePerNight.innerText = `Precio por noche: ${producto.pricePerNight} ${producto.currency}`;

            producto.services.forEach(servicio => {
                const listItem = document.createElement('li');
                listItem.innerText = servicio;
                servicesList.appendChild(listItem);
            });

            container.appendChild(img);
            productoDiv.appendChild(location);
            productoDiv.appendChild(type);
            productoDiv.appendChild(pricePerNight);
            productoDiv.appendChild(servicesList);
            container.appendChild(productoDiv);
        } else {
            console.error('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
}

// Obtener el ID del producto desde la URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtener el ID del producto, y si no está presente, devolver 1 por defecto
const productIdParam = getQueryParameter('id');
const productId = productIdParam !== null ? parseInt(productIdParam) : 1; // Usa 1 solo si no hay ID en la URL

cargarProducto(productId);


const navElements = [
    {title:'Inicio', link:`./index.html`},
    {title:'Nosotros', link:`./nosotros.html`},
]

const navElements2 = [
    {title:'Estadías', link:`./estadias.html`},
    {title:'Destinos', link:`./destinos.html`},
]


export const navBarModule = `
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
                <img src="./assets/img/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Accesible Travel
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${
                        navElements.map(e =>{
                        return `

                            <li class="nav-item" >
                                <a class="nav-link active" id="menu" href="${e.link}">${e.title}</a>
                            </li>

                             `
                          }).join('')  
                        }
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Catálogo
                        </a>
                        <ul class="dropdown-menu">
                            ${
                                navElements2.map(e =>{
                                return `

                                  <li>
                                    <a class="dropdown-item" href="${e.link}">${e.title}</a>
                                  </li>

                                `
                            }).join('')  
                            }
                            
                        </ul>
                    </li>
                </ul>

                
                <form class="d-flex ms-auto" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                    <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>

    `;
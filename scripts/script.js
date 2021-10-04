//Se importa la data
import {data} from '../data/data.js';
//console.log(data)

//Mostrar la data
const loadData = (datos) => {
    //console.log(datos)
    datos.forEach(personaje => {
        /* console.log(personaje)
        console.log(personaje.name) */
        const {id, name,image}=personaje;//desestructuracion
        templateCard.querySelector('h3').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}
//capturar elementos del HTML
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

//Enviar la Data
//Eventos DOMContentloaded
document.addEventListener('DOMContentLoaded',loadData(data))

//capturar el evento del item
items.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-dark')){
        const id = e.target.dataset.id;
        const per = data.find(persona => persona.id == id)
        localStorage.setItem('Detail', JSON.stringify(per))
        window.location.href = 'detail.html'
    };
})
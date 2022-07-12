const cards = document.querySelector('#cards-dinamicas')
const templateCards = document.querySelector('#template-cards').content

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

 const fetchData = async () => {

    //  console.log("funcionando")
    try {
        laodingData(true)

        const resp = await fetch("https://rickandmortyapi.com/api/character")
        const data = await resp.json()
        pintarCard(data)
        //console.log(data)
    } catch (err) {
        console.log(err)
    } finally {
        laodingData(false)
    }
 }
 
 const pintarCard = data => {
    console.log(data)
        //console.log(element)
    const fragment = document.createDocumentFragment()

    data.results.forEach((element) => {
    const clone = templateCards.cloneNode(true)
    clone.querySelector("h5").textContent = element.name;
    clone.querySelector("p").textContent = element.species;
    clone.querySelector(".card-img").setAttribute("src", element.image);
    fragment.appendChild(clone)
    });
    //Se usa el fragment para evitar el reflow -- Sustituye el inner
    cards.appendChild(fragment)
 }

 const laodingData = estado => {
     const loading = document.querySelector('#spinnerLoading')
     if (estado) {
         loading.classList.remove('d-none')
     } else {
        loading.classList.add('d-none')         
     }
 }

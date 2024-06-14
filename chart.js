

let contenerdorpersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)

    datos.results.forEach((elementos) => {
        //console.log(elementos.name)

        const contenedorcreado = document.createElement('div')
        
        contenedorcreado.innerHTML = `
       <h4>${elementos.name}<h4>
       <img src="${elementos.image}">
       <h5>${elementos.species}<h5>
       <h6>${elementos.status}<h6>
       <h7>${elementos.gender}<h7>
        `;
    
        

contenerdorpersonajes.append(contenedorcreado)




    });
})
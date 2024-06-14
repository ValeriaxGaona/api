 
 let contenedorepisodios = document.getElementById("episodios")

 fetch("https://rickandmortyapi.com/api/episode")
 .then((response)=>response.json())
 .then((datos)=>{

    console.log(datos)
    console.log(datos.results)
    datos.results.forEach((elementos) => {
        console.log(elementos.name)
        
        const contenedorCreado = document.createElement('div')

        contenedorCreado.innerHTML =`
        <h4>-${elementos.name}-        
        <br>${elementos.air_date}<br><h4>
        `;


        contenedorepisodios.appendChild(contenedorCreado)
    });
 })
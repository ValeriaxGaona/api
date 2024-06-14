fetch("menu.json")
//Que hace? esta linea inicia la carga del archivo menu.json fecht es una funcion de javascriptque facilita la realizacion de solicitudes de la red, como obtener datosde un archivo o un endpoint de API
//Como funciona? fetch devuelve una promesa que, que cuando se resuelve, te da acceso ala respuesta de la solicitud. Esta  respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la repuestes misma.
.then(response=> response.json())
//Que hace? Esta linea toma el objeto de respuestas obtenido del fetch y utiliza el metodo .json()para convertir el cuerpo de la respuesta  en u  objeto Javascript (esto asume  que el cuerpo de la respuesta esta en formato JSON).
//como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el cotenido del cuerpo en formato JSON.
then(Data=>{
    const menuContainer = document.getElementById
    ("menu-container");
    //Que hace? Aqui e procesan los datos JSON ya convertidos.Se obtiene una referencia el contenido del menu en el HTML mediante getElementById(menu-container) y luego se itera soobre loselementos( categorias)del menu.
    Data.items.forEach(categoria) => {
        const categoryTitle =document.createElement("h2");
    
        menuContainer.appendChild(categoryTitle);const table = document. createElement("table");
        //Que hace? se crea un elemento table para cada categoria.Ademas, se prepara el encabezado(tablehead) con las columnas pertinentes.tableBody se inicializa vacio y se llenara con los elementos con los elementos dela categoria.
        console tableHead = '<tr><th>foto</th><th>Descripcion</th><th>precio</th><tr>';
        let tableBody = '';
        //como funciona? par cada categoria en los datos ,se realizan varios pasos: crear un titulo para la categoria ( se crea  un elemento<h2> para el titulo de la categoria , se  establece su contenido del texto)








    }
})
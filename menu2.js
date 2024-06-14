fetch('menu.json')
    .then(Response => Response.json())
    .then(data => {
        const menuContainer = document.getElementById('menu-container');

        let total = 0;
        data.items.forEach(category => {
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = category.category;
            menuContainer.appendChild(categoryTitle);

            const table = document.createElement('table');
            let tableContent = '+<tr><th>Foto</th><th>descrpcion</th><th>precio</th><th>seleccionar</th></tr>';
            let tableBody = 
            category.items.forEach(item => {
                tableBody +=
                    <tr>
                        <td><img src="${item.image}" alt="${items.name}"></img></td>
                        <td>${item.name} - ${item.descripcion}</td>
                        <td><input type="checkbox" data-price="${item.price.replace('&','')}" onchage="updateTotal()"></input></td>
                    </tr>;

            });
            table.innerHTML = tableContent;
            menuContainer.appendChild(table);

        });
    });
function updateTotal(){
    const checkboxes= document.querySelectorAll('input[type="checkbox"][data-price]');
    let currentTotal = 0;
    checkboxes.forEach(checkbox =>{
        if(checkbox.checked){currentTotal += parseFloat(checkbox.getAttribute('data-price'));
          }
    });
    document.getElementById('total').textContent = currentTotal.tofired(2);
}
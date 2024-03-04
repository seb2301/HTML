const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatcurrency(value){
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}


function showAll(productsArray) {

    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
     <li>
         <img src=${product.src}>
         <p>${product.name}</p>
            <p class="item-price"> ${formatcurrency(product.price)}</p>
      </li>
      `
    })
    list.innerHTML = myLi
}
function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    showAll(newPrices)
}
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = ` 
    <li>
                     <p>O Total do itens é de  ${formatcurrency (totalValue)}</p>
      </li>`
}
function filterItemsVegan() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterItemsVegan)
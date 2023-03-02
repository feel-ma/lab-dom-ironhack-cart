// ITERATION 1

function updateSubtotal(product) {
 
  const price = product.querySelector('.price span').textContent;
    const quantity = product.querySelector('.quantity input').value
    const total = price*quantity
    product.querySelector('.subtotal span').textContent=total;
    return total
}

//updateSubtotal()
function calculateAll() {
  const products = document.getElementsByClassName('product')
  const newArray=[...products]
  let endTotal =0
  for(element of newArray){
    endTotal+=updateSubtotal(element)
  }
  document.querySelector('#total-value span').textContent=endTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const removeMe= target.parentNode
  const wholeFamily= removeMe.parentNode
  console.log('The target in remove is:', target);
  wholeFamily.parentNode.removeChild(wholeFamily)
}

// ITERATION 5

function createProduct() {
  const cloneProduct = document.querySelector('tbody tr')
  const copyDestination= document.querySelector('tbody')
  const newProduct= cloneProduct.cloneNode(true)
  newProduct.querySelector('.quantity input').value=0
  //const name= newProduct.querySelector('.name span')
  const name = document.querySelector('#newPName input').value
  newProduct.querySelector('.name span').textContent=name
  const value= document.querySelector('#newPQ input').value
  newProduct.querySelector('.price span').textContent = value

  console.log(newProduct)

  copyDestination.appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = document.getElementsByClassName('btn-remove')
  const removeArray =[...removeButton]
  for(products of removeArray){
    products.addEventListener('click', removeProduct)
  }
  const create = document.getElementById('create')
  create.addEventListener('click', createProduct )
  //... your code goes here
});

function connectApi(){
    
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>listarProdutos(json))
}
function listarProdutos(abacaxi) {
    const productsList = document.getElementById("products-list")
    abacaxi.forEach(item => {        
        const divItem = document.createElement("div")
        divItem.innerHTML = `
        <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${item.image}">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
          <h4>$ ${item.price}</4>
          </div>          
          <div class ="card-action">
          <a href="#" class="waves-effect waves-light btn-large"><i class="material-icons right">add_shopping_cart</i>Compre Agora</a>         
   
          </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
          <p>${item.description}</p>
        </div>
      </div> `       
        productsList.appendChild(divItem)        
    })
}
connectApi()
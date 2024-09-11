window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    showproductListings(category)
    document.querySelector('#category-selection').value = category
}

function showproductListings(value){
    console.log('show products: ',value);
    
    const productListingsDiv = document.querySelector('#product-listings')
    productListingsDiv.innerHTML = ''
    let data = allProductsArray

    switch (value) {
        case 'smartphones':
            data = smarphones
            break;
        case 'tablets':
            data = tablets
            break;
        case 'laptops':
            data = laptops
            break;
        case 'mobile-accesories':
            data = mobileAccesories
            break;
    
        default:
            break;
    }


    data.forEach((product) =>{
        const productDiv = document.createElement('div')
        productDiv.className = 'product-listing'
        productDiv.id = product.id

        const thumbnail = document.createElement('img')
        thumbnail.className = 'product-thumbnail'
        thumbnail.src = `${product.thumbnail}`
        productDiv.appendChild(thumbnail)

        const title = document.createElement('p')
        title.className = 'product-title'
        title.innerText = `${product.title}`
        productDiv.appendChild(title)

        const price = document.createElement('p')
        price.className = 'product-price'
        price.innerText = `$${product.price}`
        productDiv.appendChild(price)

        productDiv.addEventListener('click', () => {
            open('product-page.html?id=' + product.id,'_self')
        })

        productListingsDiv.appendChild(productDiv)
    })

}
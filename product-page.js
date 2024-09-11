window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    
    let product
    allProductsArray.forEach(item => {
        if(item.id == id)
            product = item
    })
    showProduct(product)
    console.log(product);
    
}

function showProduct(product){
    const imgsDiv = document.querySelector('.product-images')

    product.images.forEach( img => {
        
    })
}
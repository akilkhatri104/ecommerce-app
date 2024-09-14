window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    
    let product
    allProductsArray.forEach(item => {
        if(item.id == id){
            product = item
            return
        }
    })
    showProduct(product)
    console.log(product);
    
}

function showProduct(product){
    const imgSmall = document.querySelector('#image-small')
    
    for(let i = 0; i < product.images.length; i++){
        const img = document.createElement('img')
        img.id = `img-${i}`
        img.src = product.images[i]
        imgSmall.appendChild(img)

        if(i == 0){
            showPrimaryImage(`img-${i}`)
        }

        img.addEventListener('click' || 'hover',()=>{
            showPrimaryImage(`img-${i}`)
        })
    }    
        
    document.querySelector('#product-name').innerHTML = product.title

    document.querySelector('#product-category').innerHTML = `<a href='products.html?category=${product.category}' target='_blank'>${product.category}</a>`

    document.querySelector('#product-description').innerHTML = product.description

    document.querySelector('#product-price').innerHTML = `$${product.price}`

    document.querySelector('#add-to-cart-btn').addEventListener('click',()=>{
        addToCart(product)
        console.log(cart);
        
    })
    
}

function showPrimaryImage(id){
    const imgToShow = document.querySelector(`#${id}`)
    console.log(imgToShow.src);
    
    console.log(document.querySelector('#product-image'))
    document.querySelector('#product-image').src = `${imgToShow.src}`

    document.querySelector('#image-small').childNodes.forEach(child => {
        if(child.nodeName == 'IMG'){
            child.style.border = ''
        }
        
    })
    imgToShow.style.border = '2px solid'

   
}


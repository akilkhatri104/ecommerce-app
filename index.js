
function showSmarphonesHomePage(){
    const smartphonesDiv = document.querySelector('#smartphone-listings-homepage')

    smarphones.forEach((smarphone) =>{
        const smartphoneDiv = document.createElement('div')
        smartphoneDiv.className = 'product-listing'
        smartphoneDiv.id = smarphone.id

        const thumbnail = document.createElement('img')
        thumbnail.className = 'product-thumbnail'
        thumbnail.src = `${smarphone.thumbnail}`
        smartphoneDiv.appendChild(thumbnail)

        const title = document.createElement('p')
        title.className = 'product-title'
        title.innerText = `${smarphone.title}`
        smartphoneDiv.appendChild(title)

        const price = document.createElement('p')
        price.className = 'product-price'
        price.innerText = `$${smarphone.price}`
        smartphoneDiv.appendChild(price)

        smartphoneDiv.addEventListener('click',()=>{
            open('product-page.html?id='+smarphone.id,'_self')
        })

        smartphonesDiv.appendChild(smartphoneDiv)
    })



}
function showMobileAccesoriesHomePage(){
    const mobileAccesoriesDiv = document.querySelector('#mobile-accesories-listings-homepage')

    mobileAccesories.forEach((mobileAccesory) =>{
        const mobileAccesoryDiv = document.createElement('div')
        mobileAccesoryDiv.className = 'product-listing'
        mobileAccesoriesDiv.id = mobileAccesory.id

        const thumbnail = document.createElement('img')
        thumbnail.className = 'product-thumbnail'
        thumbnail.src = `${mobileAccesory.thumbnail}`
        mobileAccesoryDiv.appendChild(thumbnail)

        const title = document.createElement('p')
        title.className = 'product-title'
        title.innerText = `${mobileAccesory.title}`
        mobileAccesoryDiv.appendChild(title)

        const price = document.createElement('p')
        price.className = 'product-price'
        price.innerText = `$${mobileAccesory.price}`
        mobileAccesoryDiv.appendChild(price)

        mobileAccesoryDiv.addEventListener('click',()=>{
            open('product-page.html?id='+mobileAccesory.id,'_self')
        })

        mobileAccesoriesDiv.appendChild(mobileAccesoryDiv)
    })



}
function showLaptopsHomePage(){
    const laptopsDiv = document.querySelector('#laptops-listings-homepage')

    laptops.forEach((laptop) =>{
        const laptopDiv = document.createElement('div')
        laptopDiv.className = 'product-listing'
        laptopDiv.id = laptop.id

        const thumbnail = document.createElement('img')
        thumbnail.className = 'product-thumbnail'
        thumbnail.src = `${laptop.thumbnail}`
        laptopDiv.appendChild(thumbnail)

        const title = document.createElement('p')
        title.className = 'product-title'
        title.innerText = `${laptop.title}`
        laptopDiv.appendChild(title)

        const price = document.createElement('p')
        price.className = 'product-price'
        price.innerText = `$${laptop.price}`
        laptopDiv.appendChild(price)

        laptopDiv.addEventListener('click',()=>{
            open('product-page.html?id='+laptop.id,'_self')
        })

        laptopsDiv.appendChild(laptopDiv)
    })



}
function showTabletsHomePage(){
    const tabletsDiv = document.querySelector('#tablets-listings-homepage')

    tablets.forEach((tablet) =>{
        const tabletDiv = document.createElement('div')
        tabletDiv.className = 'product-listing'
        tabletDiv.id = tablet.id

        const thumbnail = document.createElement('img')
        thumbnail.className = 'product-thumbnail'
        thumbnail.src = `${tablet.thumbnail}`
        tabletDiv.appendChild(thumbnail)

        const title = document.createElement('p')
        title.className = 'product-title'
        title.innerText = `${tablet.title}`
        tabletDiv.appendChild(title)

        const price = document.createElement('p')
        price.className = 'product-price'
        price.innerText = `$${tablet.price}`
        tabletDiv.appendChild(price)

        tabletDiv.addEventListener('click',() => {
            open('product-page.html?id='+tablet.id,'_self')
        })

        tabletsDiv.appendChild(tabletDiv)
    })



}

showSmarphonesHomePage()
showMobileAccesoriesHomePage()
showLaptopsHomePage()
showTabletsHomePage()

const laptopBtn = document.querySelector('#laptop-btn')
laptopBtn.addEventListener('click',()=>{
    open('products.html?category=laptops','_self')
})
document.querySelector('#smartphone-btn').addEventListener('click',()=>{
    open('products.html?category=smartphones','_self')
})
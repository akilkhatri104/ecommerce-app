const laptops = Array.from(JSON.parse(`[
        {
            "id": 78,
            "title": "Apple MacBook Pro 14 Inch Space Grey",
            "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
            "category": "laptops",
            "price": 1999.99,
            "discountPercentage": 9.25,
            "rating": 3.13,
            "stock": 39,
            "tags": [
                "laptops",
                "apple"
            ],
            "brand": "Apple",
            "sku": "QDKO6NRJ",
            "weight": 4,
            "dimensions": {
                "width": 12.38,
                "height": 21.55,
                "depth": 27.95
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Hunter Gordon",
                    "reviewerEmail": "hunter.gordon@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Emma Wilson",
                    "reviewerEmail": "emma.wilson@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "David Martinez",
                    "reviewerEmail": "david.martinez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "3883623063065",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png",
                "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png",
                "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
        },
        {
            "id": 79,
            "title": "Asus Zenbook Pro Dual Screen Laptop",
            "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
            "category": "laptops",
            "price": 1799.99,
            "discountPercentage": 9.21,
            "rating": 3.14,
            "stock": 38,
            "tags": [
                "laptops"
            ],
            "brand": "Asus",
            "sku": "4A9KFMBG",
            "weight": 8,
            "dimensions": {
                "width": 19.67,
                "height": 11.05,
                "depth": 14.32
            },
            "warrantyInformation": "No warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Jack Ward",
                    "reviewerEmail": "jack.ward@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very disappointed!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Ava Harris",
                    "reviewerEmail": "ava.harris@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Brayden Fleming",
                    "reviewerEmail": "brayden.fleming@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "2899455033799",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png",
                "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png",
                "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png"
        },
        {
            "id": 80,
            "title": "Huawei Matebook X Pro",
            "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
            "category": "laptops",
            "price": 1399.99,
            "discountPercentage": 15.25,
            "rating": 4.62,
            "stock": 34,
            "tags": [
                "laptops"
            ],
            "brand": "Huawei",
            "sku": "U2CBNNB0",
            "weight": 9,
            "dimensions": {
                "width": 22.11,
                "height": 11.11,
                "depth": 23.07
            },
            "warrantyInformation": "2 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Samantha Howard",
                    "reviewerEmail": "samantha.howard@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Daniel Cook",
                    "reviewerEmail": "daniel.cook@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.622Z",
                    "reviewerName": "Brayden Fleming",
                    "reviewerEmail": "brayden.fleming@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.622Z",
                "updatedAt": "2024-05-23T08:56:21.622Z",
                "barcode": "1232723732298",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png",
                "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png",
                "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
        },
        {
            "id": 81,
            "title": "Lenovo Yoga 920",
            "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
            "category": "laptops",
            "price": 1099.99,
            "discountPercentage": 7.77,
            "rating": 2.98,
            "stock": 71,
            "tags": [
                "laptops"
            ],
            "brand": "Lenovo",
            "sku": "MST9WZQY",
            "weight": 7,
            "dimensions": {
                "width": 11.02,
                "height": 14.45,
                "depth": 24.09
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Paisley Bell",
                    "reviewerEmail": "paisley.bell@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Lincoln Kelly",
                    "reviewerEmail": "lincoln.kelly@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Luna Russell",
                    "reviewerEmail": "luna.russell@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.623Z",
                "updatedAt": "2024-05-23T08:56:21.623Z",
                "barcode": "9590995785298",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png",
                "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png",
                "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png"
        },
        {
            "id": 82,
            "title": "New DELL XPS 13 9300 Laptop",
            "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
            "category": "laptops",
            "price": 1499.99,
            "discountPercentage": 11.7,
            "rating": 2.98,
            "stock": 18,
            "tags": [
                "laptops"
            ],
            "brand": "Dell",
            "sku": "XBJJ446X",
            "weight": 10,
            "dimensions": {
                "width": 12.09,
                "height": 6.43,
                "depth": 15.69
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Very disappointed!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Julian Newton",
                    "reviewerEmail": "julian.newton@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Grace Perry",
                    "reviewerEmail": "grace.perry@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.623Z",
                    "reviewerName": "Daniel Taylor",
                    "reviewerEmail": "daniel.taylor@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.623Z",
                "updatedAt": "2024-05-23T08:56:21.623Z",
                "barcode": "0358629687929",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png",
                "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png",
                "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png"
        }
    ]`))

const mobileAccesories = Array.from(JSON.parse(`[
        {
            "id": 99,
            "title": "Amazon Echo Plus",
            "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
            "category": "mobile-accessories",
            "price": 99.99,
            "discountPercentage": 16.3,
            "rating": 3.52,
            "stock": 50,
            "tags": [
                "electronics",
                "smart speakers"
            ],
            "brand": "Amazon",
            "sku": "YHLK4W9V",
            "weight": 7,
            "dimensions": {
                "width": 8.1,
                "height": 7.74,
                "depth": 5.68
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Nora Mills",
                    "reviewerEmail": "nora.mills@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Ava Taylor",
                    "reviewerEmail": "ava.taylor@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Aria Flores",
                    "reviewerEmail": "aria.flores@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "0697313083842",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png"
        },
        {
            "id": 100,
            "title": "Apple Airpods",
            "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
            "category": "mobile-accessories",
            "price": 129.99,
            "discountPercentage": 4.82,
            "rating": 4.38,
            "stock": 93,
            "tags": [
                "electronics",
                "wireless earphones"
            ],
            "brand": "Apple",
            "sku": "H76W8TSP",
            "weight": 3,
            "dimensions": {
                "width": 22.62,
                "height": 9.92,
                "depth": 18.15
            },
            "warrantyInformation": "No warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Waste of money!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Aaliyah Hanson",
                    "reviewerEmail": "aaliyah.hanson@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Waste of money!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Leah Gutierrez",
                    "reviewerEmail": "leah.gutierrez@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not worth the price!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Jace Smith",
                    "reviewerEmail": "jace.smith@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "3925144121840",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
        },
        {
            "id": 101,
            "title": "Apple AirPods Max Silver",
            "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
            "category": "mobile-accessories",
            "price": 549.99,
            "discountPercentage": 11.7,
            "rating": 3.11,
            "stock": 7,
            "tags": [
                "electronics",
                "over-ear headphones"
            ],
            "brand": "Apple",
            "sku": "HPK82VDE",
            "weight": 4,
            "dimensions": {
                "width": 7.73,
                "height": 18.36,
                "depth": 17.87
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 1,
                    "comment": "Waste of money!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Harper Kelly",
                    "reviewerEmail": "harper.kelly@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Abigail Rivera",
                    "reviewerEmail": "abigail.rivera@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Nora Russell",
                    "reviewerEmail": "nora.russell@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "9261269777547",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png"
        },
        {
            "id": 102,
            "title": "Apple Airpower Wireless Charger",
            "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
            "category": "mobile-accessories",
            "price": 79.99,
            "discountPercentage": 6.54,
            "rating": 4.51,
            "stock": 78,
            "tags": [
                "electronics",
                "wireless chargers"
            ],
            "brand": "Apple",
            "sku": "CBIU3PMZ",
            "weight": 3,
            "dimensions": {
                "width": 25.51,
                "height": 20.44,
                "depth": 26.48
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Bella Gonzalez",
                    "reviewerEmail": "bella.gonzalez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Eli Bennett",
                    "reviewerEmail": "eli.bennett@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Cameron Perez",
                    "reviewerEmail": "cameron.perez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 8,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "6981066059882",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png"
        },
        {
            "id": 103,
            "title": "Apple HomePod Mini Cosmic Grey",
            "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
            "category": "mobile-accessories",
            "price": 99.99,
            "discountPercentage": 3.7,
            "rating": 4.51,
            "stock": 65,
            "tags": [
                "electronics",
                "smart speakers"
            ],
            "brand": "Apple",
            "sku": "LDHQAT4B",
            "weight": 2,
            "dimensions": {
                "width": 21.14,
                "height": 12.62,
                "depth": 20.13
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Very dissatisfied!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Evelyn Gonzalez",
                    "reviewerEmail": "evelyn.gonzalez@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Mateo Perez",
                    "reviewerEmail": "mateo.perez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Nora Mills",
                    "reviewerEmail": "nora.mills@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 8,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "3484370545271",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png"
        },
        {
            "id": 104,
            "title": "Apple iPhone Charger",
            "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
            "category": "mobile-accessories",
            "price": 19.99,
            "discountPercentage": 1.01,
            "rating": 3.03,
            "stock": 4,
            "tags": [
                "electronics",
                "chargers"
            ],
            "brand": "Apple",
            "sku": "YAA6EHI7",
            "weight": 5,
            "dimensions": {
                "width": 28.77,
                "height": 25.05,
                "depth": 29.55
            },
            "warrantyInformation": "2 year warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "Low Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Emily Johnson",
                    "reviewerEmail": "emily.johnson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Charlotte Lopez",
                    "reviewerEmail": "charlotte.lopez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Cameron Perez",
                    "reviewerEmail": "cameron.perez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 43,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "9483427398580",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png"
        },
        {
            "id": 105,
            "title": "Apple MagSafe Battery Pack",
            "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
            "category": "mobile-accessories",
            "price": 99.99,
            "discountPercentage": 10.27,
            "rating": 2.61,
            "stock": 80,
            "tags": [
                "electronics",
                "power banks"
            ],
            "brand": "Apple",
            "sku": "XNFJURL7",
            "weight": 6,
            "dimensions": {
                "width": 21.61,
                "height": 7.98,
                "depth": 9.32
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Hazel Gardner",
                    "reviewerEmail": "hazel.gardner@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Aurora Rodriguez",
                    "reviewerEmail": "aurora.rodriguez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Victoria McDonald",
                    "reviewerEmail": "victoria.mcdonald@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 4,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "1850091228580",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png"
        },
        {
            "id": 106,
            "title": "Apple Watch Series 4 Gold",
            "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
            "category": "mobile-accessories",
            "price": 349.99,
            "discountPercentage": 5.14,
            "rating": 4.42,
            "stock": 68,
            "tags": [
                "electronics",
                "smartwatches"
            ],
            "brand": "Apple",
            "sku": "ZNXPOEPT",
            "weight": 6,
            "dimensions": {
                "width": 8.96,
                "height": 28.26,
                "depth": 26.46
            },
            "warrantyInformation": "6 months warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Ellie Stewart",
                    "reviewerEmail": "ellie.stewart@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Poor quality!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Grayson Coleman",
                    "reviewerEmail": "grayson.coleman@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Alice Smith",
                    "reviewerEmail": "alice.smith@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "4492482209885",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png"
        },
        {
            "id": 107,
            "title": "Beats Flex Wireless Earphones",
            "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
            "category": "mobile-accessories",
            "price": 49.99,
            "discountPercentage": 8.27,
            "rating": 4.17,
            "stock": 49,
            "tags": [
                "electronics",
                "wireless earphones"
            ],
            "brand": "Beats",
            "sku": "7N15J2UK",
            "weight": 6,
            "dimensions": {
                "width": 23.49,
                "height": 15.22,
                "depth": 20.05
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Hannah Robinson",
                    "reviewerEmail": "hannah.robinson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Grace Perry",
                    "reviewerEmail": "grace.perry@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Grayson Coleman",
                    "reviewerEmail": "grayson.coleman@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 19,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "4068884711976",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png"
        },
        {
            "id": 108,
            "title": "iPhone 12 Silicone Case with MagSafe Plum",
            "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
            "category": "mobile-accessories",
            "price": 29.99,
            "discountPercentage": 14.35,
            "rating": 4.41,
            "stock": 51,
            "tags": [
                "electronics",
                "phone accessories"
            ],
            "brand": "Apple",
            "sku": "3UHE8VLA",
            "weight": 5,
            "dimensions": {
                "width": 6.32,
                "height": 23.37,
                "depth": 21.62
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 1,
                    "comment": "Very disappointed!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Isaac Lawrence",
                    "reviewerEmail": "isaac.lawrence@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Emily Johnson",
                    "reviewerEmail": "emily.johnson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Mateo Bennett",
                    "reviewerEmail": "mateo.bennett@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 19,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "4106912332105",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
        },
        {
            "id": 109,
            "title": "Monopod",
            "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
            "category": "mobile-accessories",
            "price": 19.99,
            "discountPercentage": 11.62,
            "rating": 2.99,
            "stock": 96,
            "tags": [
                "electronics",
                "camera accessories"
            ],
            "brand": "TechGear",
            "sku": "RDEQ0W2L",
            "weight": 9,
            "dimensions": {
                "width": 8.42,
                "height": 25.12,
                "depth": 29.9
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Austin Hudson",
                    "reviewerEmail": "austin.hudson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Austin Hudson",
                    "reviewerEmail": "austin.hudson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Gabriel Mitchell",
                    "reviewerEmail": "gabriel.mitchell@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 10,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "2270380444574",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png",
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/thumbnail.png"
        },
        {
            "id": 110,
            "title": "Selfie Lamp with iPhone",
            "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
            "category": "mobile-accessories",
            "price": 14.99,
            "discountPercentage": 13.86,
            "rating": 2.84,
            "stock": 89,
            "tags": [
                "electronics",
                "selfie accessories"
            ],
            "brand": "GadgetMaster",
            "sku": "2VZ1ZNMO",
            "weight": 7,
            "dimensions": {
                "width": 13.38,
                "height": 26.33,
                "depth": 22.71
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Hannah Howard",
                    "reviewerEmail": "hannah.howard@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "William Gonzalez",
                    "reviewerEmail": "william.gonzalez@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Amelia Perez",
                    "reviewerEmail": "amelia.perez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 4,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "6205123036707",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png"
        },
        {
            "id": 111,
            "title": "Selfie Stick Monopod",
            "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
            "category": "mobile-accessories",
            "price": 12.99,
            "discountPercentage": 15.29,
            "rating": 2.93,
            "stock": 33,
            "tags": [
                "electronics",
                "selfie accessories"
            ],
            "brand": "SnapTech",
            "sku": "9T6WSF1E",
            "weight": 7,
            "dimensions": {
                "width": 6.11,
                "height": 27.92,
                "depth": 23.63
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Aaron Cook",
                    "reviewerEmail": "aaron.cook@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Emma Wilson",
                    "reviewerEmail": "emma.wilson@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Mia Miller",
                    "reviewerEmail": "mia.miller@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 10,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "2854098561118",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png"
        },
        {
            "id": 112,
            "title": "TV Studio Camera Pedestal",
            "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
            "category": "mobile-accessories",
            "price": 499.99,
            "discountPercentage": 10.28,
            "rating": 4.05,
            "stock": 45,
            "tags": [
                "electronics",
                "camera accessories"
            ],
            "brand": "ProVision",
            "sku": "8K18CNAH",
            "weight": 7,
            "dimensions": {
                "width": 29.9,
                "height": 16.66,
                "depth": 13.85
            },
            "warrantyInformation": "6 months warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Mia Miller",
                    "reviewerEmail": "mia.miller@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Harper Kelly",
                    "reviewerEmail": "harper.kelly@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.624Z",
                    "reviewerName": "Lucas Allen",
                    "reviewerEmail": "lucas.allen@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.624Z",
                "updatedAt": "2024-05-23T08:56:21.624Z",
                "barcode": "4797157680929",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png"
        }
    ]`))

const smarphones = Array.from(JSON.parse(`[
        {
            "id": 121,
            "title": "iPhone 5s",
            "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
            "category": "smartphones",
            "price": 199.99,
            "discountPercentage": 11.85,
            "rating": 3.92,
            "stock": 65,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "AZ1L68SM",
            "weight": 4,
            "dimensions": {
                "width": 8.49,
                "height": 25.34,
                "depth": 18.12
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Wyatt Perry",
                    "reviewerEmail": "wyatt.perry@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Olivia Anderson",
                    "reviewerEmail": "olivia.anderson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Mateo Nguyen",
                    "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2903942810911",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
        },
        {
            "id": 122,
            "title": "iPhone 6",
            "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 4.54,
            "rating": 3.76,
            "stock": 99,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "ZPXH3X9J",
            "weight": 8,
            "dimensions": {
                "width": 16.21,
                "height": 22.94,
                "depth": 5.63
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nicholas Bailey",
                    "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Clara Berry",
                    "reviewerEmail": "clara.berry@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Gavin Stanley",
                    "reviewerEmail": "gavin.stanley@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2517230562429",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
        },
        {
            "id": 123,
            "title": "iPhone 13 Pro",
            "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
            "category": "smartphones",
            "price": 1099.99,
            "discountPercentage": 18.3,
            "rating": 3.42,
            "stock": 26,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "YGQKHPGK",
            "weight": 8,
            "dimensions": {
                "width": 22.39,
                "height": 9.77,
                "depth": 19.6
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Aria Roberts",
                    "reviewerEmail": "aria.roberts@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Ryan Graham",
                    "reviewerEmail": "ryan.graham@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Poor quality!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Mason Wright",
                    "reviewerEmail": "mason.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2986724589988",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
        },
        {
            "id": 124,
            "title": "iPhone X",
            "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
            "category": "smartphones",
            "price": 899.99,
            "discountPercentage": 14.19,
            "rating": 4.96,
            "stock": 99,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "9QN3UDUD",
            "weight": 10,
            "dimensions": {
                "width": 27.86,
                "height": 8.53,
                "depth": 17.07
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 1,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Eleanor Tyler",
                    "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Maya Reed",
                    "reviewerEmail": "maya.reed@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Elena Baker",
                    "reviewerEmail": "elena.baker@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "4331405454760",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
        },
        {
            "id": 125,
            "title": "Oppo A57",
            "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
            "category": "smartphones",
            "price": 249.99,
            "discountPercentage": 12.17,
            "rating": 3.1,
            "stock": 76,
            "tags": [
                "smartphones",
                "oppo"
            ],
            "brand": "Oppo",
            "sku": "J1NO9ULG",
            "weight": 3,
            "dimensions": {
                "width": 29.52,
                "height": 11.25,
                "depth": 14.41
            },
            "warrantyInformation": "No warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Not worth the price!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Owen Fisher",
                    "reviewerEmail": "owen.fisher@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Jack Ward",
                    "reviewerEmail": "jack.ward@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Very dissatisfied!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nora Mills",
                    "reviewerEmail": "nora.mills@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 5,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "1743445108634",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png"
        },
        {
            "id": 126,
            "title": "Oppo F19 Pro Plus",
            "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
            "category": "smartphones",
            "price": 399.99,
            "discountPercentage": 15.62,
            "rating": 2.57,
            "stock": 92,
            "tags": [
                "smartphones",
                "oppo"
            ],
            "brand": "Oppo",
            "sku": "H2TTGWXB",
            "weight": 2,
            "dimensions": {
                "width": 20.35,
                "height": 16.4,
                "depth": 13.31
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Benjamin Foster",
                    "reviewerEmail": "benjamin.foster@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Lillian Bishop",
                    "reviewerEmail": "lillian.bishop@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Harper Garcia",
                    "reviewerEmail": "harper.garcia@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 5,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "7451360954140",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/thumbnail.png"
        },
        {
            "id": 127,
            "title": "Oppo K1",
            "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 14.58,
            "rating": 3.39,
            "stock": 61,
            "tags": [
                "smartphones",
                "oppo"
            ],
            "brand": "Oppo",
            "sku": "ELZ94HM3",
            "weight": 2,
            "dimensions": {
                "width": 21.83,
                "height": 27.83,
                "depth": 27.47
            },
            "warrantyInformation": "2 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Penelope Harper",
                    "reviewerEmail": "penelope.harper@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nathan Reed",
                    "reviewerEmail": "nathan.reed@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Madison Stewart",
                    "reviewerEmail": "madison.stewart@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "7535531820285",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png"
        },
        {
            "id": 128,
            "title": "Realme C35",
            "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
            "category": "smartphones",
            "price": 149.99,
            "discountPercentage": 16.47,
            "rating": 2.56,
            "stock": 81,
            "tags": [
                "smartphones",
                "realme"
            ],
            "brand": "Realme",
            "sku": "25KENV7J",
            "weight": 6,
            "dimensions": {
                "width": 21.74,
                "height": 28.75,
                "depth": 22.22
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Ava Harrison",
                    "reviewerEmail": "ava.harrison@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Waste of money!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Sophia Brown",
                    "reviewerEmail": "sophia.brown@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Grace Perry",
                    "reviewerEmail": "grace.perry@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "3119744926904",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png"
        },
        {
            "id": 129,
            "title": "Realme X",
            "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 2.39,
            "rating": 4.42,
            "stock": 87,
            "tags": [
                "smartphones",
                "realme"
            ],
            "brand": "Realme",
            "sku": "5E11C5C4",
            "weight": 1,
            "dimensions": {
                "width": 29.32,
                "height": 16.3,
                "depth": 24.12
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Benjamin Foster",
                    "reviewerEmail": "benjamin.foster@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Madison Collins",
                    "reviewerEmail": "madison.collins@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Emily Johnson",
                    "reviewerEmail": "emily.johnson@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "0139612574728",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png"
        },
        {
            "id": 130,
            "title": "Realme XT",
            "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
            "category": "smartphones",
            "price": 349.99,
            "discountPercentage": 3.03,
            "rating": 4.14,
            "stock": 53,
            "tags": [
                "smartphones",
                "realme"
            ],
            "brand": "Realme",
            "sku": "GHDMRAP2",
            "weight": 4,
            "dimensions": {
                "width": 28.82,
                "height": 23.44,
                "depth": 6.21
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Hannah Howard",
                    "reviewerEmail": "hannah.howard@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Claire Foster",
                    "reviewerEmail": "claire.foster@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very dissatisfied!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nora Russell",
                    "reviewerEmail": "nora.russell@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 5,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "3985844484131",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png"
        },
        {
            "id": 131,
            "title": "Samsung Galaxy S7",
            "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 8.83,
            "rating": 4.9,
            "stock": 55,
            "tags": [
                "smartphones",
                "samsung galaxy"
            ],
            "brand": "Samsung",
            "sku": "VZF4Z58Z",
            "weight": 8,
            "dimensions": {
                "width": 23.33,
                "height": 27.33,
                "depth": 27.02
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Jace Smith",
                    "reviewerEmail": "jace.smith@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Ruby Andrews",
                    "reviewerEmail": "ruby.andrews@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Aria Roberts",
                    "reviewerEmail": "aria.roberts@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "8841359359362",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png"
        },
        {
            "id": 132,
            "title": "Samsung Galaxy S8",
            "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
            "category": "smartphones",
            "price": 499.99,
            "discountPercentage": 2.69,
            "rating": 3.69,
            "stock": 75,
            "tags": [
                "smartphones",
                "samsung galaxy"
            ],
            "brand": "Samsung",
            "sku": "GLXQQKBF",
            "weight": 6,
            "dimensions": {
                "width": 6.88,
                "height": 8.96,
                "depth": 18.13
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Christopher West",
                    "reviewerEmail": "christopher.west@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Hazel Evans",
                    "reviewerEmail": "hazel.evans@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Luna Russell",
                    "reviewerEmail": "luna.russell@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "1337599403784",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png"
        },
        {
            "id": 133,
            "title": "Samsung Galaxy S10",
            "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
            "category": "smartphones",
            "price": 699.99,
            "discountPercentage": 0.97,
            "rating": 2.81,
            "stock": 40,
            "tags": [
                "smartphones",
                "samsung galaxy"
            ],
            "brand": "Samsung",
            "sku": "5GJFL98I",
            "weight": 3,
            "dimensions": {
                "width": 28.23,
                "height": 7.35,
                "depth": 10.68
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Grace Perry",
                    "reviewerEmail": "grace.perry@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Elijah Hill",
                    "reviewerEmail": "elijah.hill@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Eleanor Tyler",
                    "reviewerEmail": "eleanor.tyler@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "0311929399881",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png"
        },
        {
            "id": 134,
            "title": "Vivo S1",
            "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
            "category": "smartphones",
            "price": 249.99,
            "discountPercentage": 4.25,
            "rating": 2.83,
            "stock": 13,
            "tags": [
                "smartphones",
                "vivo"
            ],
            "brand": "Vivo",
            "sku": "BG6974E7",
            "weight": 1,
            "dimensions": {
                "width": 28.83,
                "height": 26.69,
                "depth": 23.12
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Alice Smith",
                    "reviewerEmail": "alice.smith@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Harper Kelly",
                    "reviewerEmail": "harper.kelly@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Lillian Simmons",
                    "reviewerEmail": "lillian.simmons@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "4070349673041",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png"
        },
        {
            "id": 135,
            "title": "Vivo V9",
            "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 14.57,
            "rating": 3.1,
            "stock": 19,
            "tags": [
                "smartphones",
                "vivo"
            ],
            "brand": "Vivo",
            "sku": "N9WFE2WH",
            "weight": 5,
            "dimensions": {
                "width": 27.29,
                "height": 9.73,
                "depth": 14.79
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Elijah Stewart",
                    "reviewerEmail": "elijah.stewart@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Aria Roberts",
                    "reviewerEmail": "aria.roberts@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Hannah Howard",
                    "reviewerEmail": "hannah.howard@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "1506104702332",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png"
        },
        {
            "id": 136,
            "title": "Vivo X21",
            "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
            "category": "smartphones",
            "price": 499.99,
            "discountPercentage": 7.32,
            "rating": 2.75,
            "stock": 0,
            "tags": [
                "smartphones",
                "vivo"
            ],
            "brand": "Vivo",
            "sku": "KSF00BOC",
            "weight": 7,
            "dimensions": {
                "width": 5.72,
                "height": 16.47,
                "depth": 27.76
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "Out of Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Logan Lee",
                    "reviewerEmail": "logan.lee@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nolan Gonzalez",
                    "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Bella Grant",
                    "reviewerEmail": "bella.grant@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 4,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2543504494043",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png"
        }
    ]`))

const tablets = Array.from(JSON.parse(`[
        {
            "id": 159,
            "title": "iPad Mini 2021 Starlight",
            "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
            "category": "tablets",
            "price": 499.99,
            "discountPercentage": 19.48,
            "rating": 3.87,
            "stock": 32,
            "tags": [
                "electronics",
                "tablets"
            ],
            "brand": "Apple",
            "sku": "L5CSWLNS",
            "weight": 3,
            "dimensions": {
                "width": 24.9,
                "height": 11.83,
                "depth": 17.08
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Disappointing product!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Hazel Evans",
                    "reviewerEmail": "hazel.evans@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Sophia Jones",
                    "reviewerEmail": "sophia.jones@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Abigail Rivera",
                    "reviewerEmail": "abigail.rivera@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.626Z",
                "updatedAt": "2024-05-23T08:56:21.626Z",
                "barcode": "6190943900668",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png",
                "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png",
                "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png",
                "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png"
        },
        {
            "id": 160,
            "title": "Samsung Galaxy Tab S8 Plus Grey",
            "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
            "category": "tablets",
            "price": 599.99,
            "discountPercentage": 8.11,
            "rating": 3.43,
            "stock": 76,
            "tags": [
                "electronics",
                "tablets"
            ],
            "brand": "Samsung",
            "sku": "1SIVLPFN",
            "weight": 10,
            "dimensions": {
                "width": 18.5,
                "height": 24.49,
                "depth": 10.45
            },
            "warrantyInformation": "6 months warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Would not buy again!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Jackson Morales",
                    "reviewerEmail": "jackson.morales@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Cameron Perez",
                    "reviewerEmail": "cameron.perez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Nova Cooper",
                    "reviewerEmail": "nova.cooper@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.626Z",
                "updatedAt": "2024-05-23T08:56:21.626Z",
                "barcode": "7204800760083",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png"
        },
        {
            "id": 161,
            "title": "Samsung Galaxy Tab White",
            "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
            "category": "tablets",
            "price": 349.99,
            "discountPercentage": 4.82,
            "rating": 3.7,
            "stock": 0,
            "tags": [
                "electronics",
                "tablets"
            ],
            "brand": "Samsung",
            "sku": "AKJPAPFO",
            "weight": 8,
            "dimensions": {
                "width": 12.42,
                "height": 10.22,
                "depth": 23.37
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "Out of Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Would not recommend!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Lucas Ramirez",
                    "reviewerEmail": "lucas.ramirez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Chloe Roberts",
                    "reviewerEmail": "chloe.roberts@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.626Z",
                    "reviewerName": "Benjamin Foster",
                    "reviewerEmail": "benjamin.foster@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.626Z",
                "updatedAt": "2024-05-23T08:56:21.626Z",
                "barcode": "1952499482706",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png",
                "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/thumbnail.png"
        }
    ]`))

const allProducts = [laptops,smarphones,mobileAccesories,tablets]
const allProductsArray = [...laptops,...smarphones,...mobileAccesories,...tablets]
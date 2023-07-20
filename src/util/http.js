import axios from "axios";
import { BASE_URL_PRODUCT } from '../config';

export async function fetchProducts() {
    const response = await axios.get(`${BASE_URL_PRODUCT}/product`);

    const products = response.data.products.map((productData) => {
        return {
            id: productData.id,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            discountPercentage: productData.discountPercentage,
            rating: productData.rating,
            stock: productData.stock,
            brand: productData.brand,
            category: productData.category,
            thumbnail: productData.thumbnail,
            images: productData.images[0],
        };
    });



    //console.log(`ürünler..:${products[0].title}`)
    return products;
}
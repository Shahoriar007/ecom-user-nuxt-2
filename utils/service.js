/**
 * function to get product for certain attribute
 */
export function getProductsByAttri(products, attri = 'is_hot') {
    return products.filter((item) => item[attri] === true);
}

export function getProductsByAttriSale(products, attri = 'is_sale') {
    return products.filter((item) => item[attri] === true);
}

export function getProductsByAttriForYou(products, attri = 'is_for_you') {
    return products.filter((item) => item[attri] === true);
}

export function getProductsByAttriNewArrival(products, attri = 'is_new') {
    return products.filter((item) => item[attri] === true);
}

/**
 * function to get top selling products
 */
export function getTopSellingProducts(products) {
    return products.sort((product1, product2) => {
        return product2.sales < product1.sales ? -1 : 1;
    });
}

/**
 * function to get top rated products
 */
export function getTopRatedProducts(products) {
    return products.sort((product1, product2) => {
        return product2.ratings < product1.ratings ? -1 : 1;
    });
}

/**
 * function to get product for certain attribute
 */
export function getProductsByAttri( products, attri = "is_hot" ) {
    return products.filter( item => item[ attri ] === true );
}

/**
 * function to get top selling products
 */
export function getTopSellingProducts( products ) {
    return products.sort( ( product1, product2 ) => {
        return product2.sales < product1.sales ? -1 : 1;
    } );
}

/**
 * function to get top rated products
 */
export function getTopRatedProducts( products ) {
    return products.sort( ( product1, product2 ) => {
        return product2.ratings < product1.ratings ? -1 : 1;
    } );
}
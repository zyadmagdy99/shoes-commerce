const { default: axiosClient } = require("./axiosClient");

const getProducts = ()=>axiosClient.get("/products?populate=*");
const getProductByProductId = (productid) => axiosClient.get(`/products?filters[productid][$eq]=${productid}&populate=*`);

export default { getProducts, getProductByProductId };
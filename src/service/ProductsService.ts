import products from '../data/products.json';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export function ProductsService() {
  function getProducts() {
    return products as Product[];
  }

  function getProductById() {
    return 1;
  }

  function getByName() {
    const prods = products as Product[];

    return prods.filter((product) => product.name === 'Product 1');
  }

  return {
    getProducts,
    getProductById,
    getByName,
  };
}

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AddProductParams } from '../contexts/bag';

export interface ProductBag {
  id: number
  name: string
  amount: number
  subtotal: number
  price: number
}

export interface Bag {
  products: ProductBag[]
  amount: number
  total: number
}

export function BagService() {
  async function getBag() {
    const response = await AsyncStorage.getItem('@Fruit:Bag');
    if (response) {
      return JSON.parse(response) as Bag;
    }

    return null;
  }

  async function getProductBag(id: number) {
    const bag = await getBag();
    if (bag) {
      const index = bag.products.findIndex((product) => product.id === id);
      return {
        product: bag.products[index],
        index,
      };
    }

    return { product: null };
  }

  async function addProduct({ product, amount }: AddProductParams) {
    let bag = await getBag();
    if (!bag) {
      bag = {
        products: [],
        amount: 0,
        total: 0,
      };
    }

    bag.products.push({
      ...product,
      amount,
      subtotal: product.price * amount,
    });

    bag.amount += amount;
    bag.total += (product.price * amount);

    await AsyncStorage.setItem('@Fruit:Bag', JSON.stringify(bag));

    return bag;
  }

  async function updateBag(bag: Bag) {
    await AsyncStorage.setItem('@Fruit:Bag', JSON.stringify(bag));
  }

  async function removeProduct(productId: number) {
    const bag = await getBag();
    const { product, index } = await getProductBag(productId);
    if (product) {
      bag.amount -= product.amount;
      bag.total -= (product.price * product.amount);

      bag.products.splice(index, 1);
    }

    await AsyncStorage.setItem('@Fruit:Bag', JSON.stringify(bag));

    return bag;
  }

  async function saveBuy() {
    await AsyncStorage.removeItem('@Fruit:Bag');
  }

  return {
    getBag,
    getProductBag,
    addProduct,
    updateBag,
    removeProduct,
    saveBuy,
  };
}

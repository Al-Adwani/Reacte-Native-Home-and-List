import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (product, quantity) => {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );
    if (foundItem) {
      foundItem.quantity = quantity;
      console.log(foundItem);
    } else {
      const newItem = {
        product: product,
        quantity: quantity,
      };
      this.items.push(newItem);
    }
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };
  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    return this.items;
  };
  checkOutCart = async () => {
    this.items = [];
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
    alert("Thank you for shopping");
  };
  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));

    return total;
  }
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;

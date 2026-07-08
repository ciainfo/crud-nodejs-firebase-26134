import db from "../config/firebase.js";
import { collection, addDoc  } from "firebase/firestore";
const productsCollection = collection(db, "products");

const products = [
  {
    title: "Laptop Lenovo",
    description: "Laptop ligera y potente para trabajo y estudio.",
    price: 799.99,
    stock: 12
  },
  {
    title: "Smartphone Samsung",
    description: "Teléfono con cámara avanzada y batería duradera.",
    price: 549.99,
    stock: 20
  },
  {
    title: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con sonido nítido.",
    price: 89.99,
    stock: 35
  },
  {
    title: "Monitor 24 pulgadas",
    description: "Monitor Full HD ideal para oficina y gaming.",
    price: 199.99,
    stock: 8
  },
  {
    title: "Teclado Mecánico",
    description: "Teclado ergonómico con switches azules.",
    price: 129.99,
    stock: 15
  }
];

const createProducts = () => {  
    products.forEach(async (product) => {
      await addDoc(productsCollection, product);
    });
};
createProducts();
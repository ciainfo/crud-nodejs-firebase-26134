import { 
  createProduct as createProductModel,
  getProducts as getProductsModel, 
  getProductById as getProductByIdModel,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel,
} from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
}

export const getProductById = async(req, res) => {
  //const id = Number(req.params.id);
  //const catId = Number(req.params.catId);
  const { id } = req.params;
  const product = await getProductByIdModel(id);

  //console.log(req.query);
  //const product = products.find((product) => product.id === id); 
  if (!product) {
    return res.status(404).json({ 
      message: "Producto no encontrado",
    });
  }
  res.json(product);
};

export const createProduct = async (req, res) => {
  const { title, price, stock, description } = req.body;
  if (!title || !price || !stock || !description /* || categoryId*/) {
    return res.status(422).json({ 
        message: "Faltan datos obligatorios",
    });
  } 
  const newProduct = await createProductModel({
    title, 
    price,
    stock,  
    description, 
    //categoryId,
  });  

  /*
  if (categoryId != 1) {
    return res.status(404).json({ 
        message: "Categoría no valida" });
  });
  
  products.push(newProduct);
  */
  console.log(newProduct);
  console.log(res.status(201).json(newProduct));
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, stock, description } = req.body;
  if (!title || !price || !stock || !description /* || categoryId*/) {
    return res.status(400).json({ 
        message: "Faltan datos obligatorios",
    });
  }
  const updatedProduct = await updateProductModel(id, { 
    title, 
    price, 
    stock,
    description,
   //categoryId});
  }); 
  if (!updatedProduct) {
    return res.status(404).json({ 
      message: "Producto no encontrado",
    });
  }
  res.json(updatedProduct);
  };

export const deleteProduct = async (req, res) => {
  const {id} = req.params;
  const deletedProduct = await deleteProductModel(id);
  if (!deletedProduct) {
    return res.status(404).json({ 
      message: "Producto no encontrado",
    });
  } 
  /*const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ error: "Producto no encontrado" 
    });
  }
  const deletedProduct = products.splice(productIndex, 1);
  */
  res.json({ 
    message: "Producto eliminado", 
    product: deletedProduct,
  });
}
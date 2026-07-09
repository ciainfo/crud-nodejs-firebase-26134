# Proyecto Entrega Final

Este proyecto es una API RESTful para la gestión de productos. Permite crear, obtener y gestionar productos a través de diferentes endpoints.

## Estructura del Proyecto

- **src/index.js**: Punto de entrada de la aplicación. Configura el servidor y establece middleware y rutas.
- **src/controllers/productController.js**: Contiene la lógica relacionada con los productos, incluyendo métodos para crear, modificar, eliminar y obtener productos.
- **src/routes/products.js**: Define las rutas relacionadas con los productos y utiliza el ProductController para manejar las solicitudes.
- **src/models/product.js**: Define el modelo de datos para los productos y representa la estructura de un producto.
- **package.json**: Configuración para npm, incluyendo dependencias y scripts necesarios.

## API RESTful

### Autorización con Token

- **Método**: POST
- **Endpoint**: /api/login
- **Cuerpo**:
  {
  "email": ""email": "user@email.com",
  "password": "strongPass123"",
    }
- **Respuesta**:
  {
    "Login exitoso"
    "token": "    "
  }
- **Estado**: 200

- Si los datos son incorrectos:
  {
  "error": "Credenciales inválidas"
  }
- **Estado**: 401

### Crear Producto

- **Método**: POST
- **Endpoint**: /api/products
- **Header**: Authorization: Bearer <token>
- **Cuerpo**:
  {
  "title": "Título del Producto",
  "price": 100.00,
  "stock": 10,
  "description": "Descripción del producto"
  }
- **Respuesta**:
  {
  "id": 1,
  "title": "Título del Producto",
  "price": 100.00,
  "description": "Descripción del producto"
  }
- **Estado**: 201

### Error al Crear Producto

- **Método**: POST
- **Endpoint**: /api/products
- **Header**: Authorization: Bearer <token>
- **Cuerpo**:
  {
  "title": "Producto 1",
  "price": 100.00,
   
  }
- **Respuesta**:
  {
  "error": "Faltan datos obligatorios"
  }
- **Estado**: 422

### Obtener Todos los Productos

- **Método**: GET
- **Endpoint**: /api/products
- **Header**: Authorization: Bearer <token>
- **Respuesta**:
  {
  "products": [
  {
  "id": 1,
  "title": "Título del Producto",
  "price": 100.00,
  "description": "Descripción del producto"
  }
  .......
  .......
  .......
  ]
  }
- **Estado**: 200

## Instrucciones de Uso

1. Clona el repositorio.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm run dev` para iniciar el proyecto.
5. Realiza login en `/api/login` para obtener el token.
6. Usa el token en el header `Authorization: Bearer <token>` para acceder a los endpoints protegidos.
7. Utiliza herramientas como ThunderClient, Postman para interactuar con la API.

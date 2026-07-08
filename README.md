# API RESTfull

## Create Product

method: POST

endpoint: /api/products

body: 

```json
{
  "name": "Product Name",
  "price": 100.00
}
```
response:

```json
{
  "id": 1,
  "name": "Product Name",
  "price": 100.00
}
```
status: 201 

## Error Create Product

method: POST
endpoint: /api/products
body: 

```json
{
  "name": "Producto 1",
  "price": 100.00
}
```
response:

```json
{
  "error": "El campo price es requerido "
}
```

status: 422 

# Get All Products
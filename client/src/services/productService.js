import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS
// GET ALL - ProductMenu
function getAll() {
  return api.get("/api/products");
}

// GET ALL ONSALE - ProductSale
function getOnsale() {
  return api.get("/api/products/onsale");
}

// POST - AddProduct
function post(data) {
  const formData = prepareFormData(data);
  return api.post("/api/products", formData, formConfig);
}

// GET BY ID - ProductDetail
function getById(id) {
  return api.get("/api/products/" + id);
}

// PUT - EditProduct
function put(id, data, uploadedfile) {
  const formData = prepareFormData(data, uploadedfile);
  return api.put("/api/products/" + id, formData, formConfig);
}

// DELETE - ProductDetail
function del(id) {
  return api.delete("/api/products/" + id);
}

// Helper functions and configuration for form data
const formConfig = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

function prepareFormData(data, uploadedfile) {
  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("color", data.color);
  formData.append("price", data.price);
  formData.append("sizes", data.sizes);
  formData.append("texture", data.texture);
  formData.append("onSale", data.onSale);
  formData.append("isAvailable", data.isAvailable);
  formData.append("availableOnline", data.availableOnline);
  formData.append("image", data.image);
  if (uploadedfile) {
    formData.append("uploadedFile", uploadedfile);
  }
  return formData;
}

// Export all functions as part of productService
const productService = {
  getAll,
  getOnsale,
  post,
  getById,
  put,
  del,
};

export default productService;

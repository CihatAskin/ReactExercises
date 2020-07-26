import * as actionTypes from "./actionTypes";

export function productsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(products) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: products };
}

export function updateProductSuccess(products) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: products };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/product/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    header: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleReponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(product))
          : dispatch(createProductSuccess(product));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export async function handleReponse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("api error");
  throw error;
}
export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(productsSuccess(result)));
  };
}

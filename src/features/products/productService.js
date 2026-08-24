const API_URL = "https://fakestoreapi.com/products";

export const getProduct =  async () => {
  const response = await fetch(API_URL)

  if(!response.ok){
    throw new Error('Failed to fetch products');
  }
  return response.json()
};

export const getProductById =  async (id) => {
  const response = await fetch(`${API_URL}/${id}`)

  if(!response.ok){
    throw new Error('Failed to fetch products');
  }
  return response.json()
};
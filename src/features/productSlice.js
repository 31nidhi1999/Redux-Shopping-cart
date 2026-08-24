import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products')

  if(!response.ok){
    throw new Error('Failed to fetch products');
  }
  return response.json()
});

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
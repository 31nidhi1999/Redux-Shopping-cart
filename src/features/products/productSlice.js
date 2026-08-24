import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getProduct, getProductById} from './productService'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => { return await getProduct() });
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => { return await getProductById(id) });

const initialState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
  detailsLoading : false,
  detailsError : null,
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
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message;
      });
  }
});

export default productSlice.reducer;
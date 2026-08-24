import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {}
});

export default productSlice.reducer;
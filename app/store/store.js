import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice/product';
// import rootReducer from './providers'; 

export function makeStore() {
  return configureStore({
    reducer: {
      product: productReducer,
    },
  });
}


// 'use client';

// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice/product';

// export const store = configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });

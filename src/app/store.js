import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/features/mailSlice';
import userReducer from '../features/features/userSlice'

export const store = configureStore({
  reducer: {
   mail: mailReducer,
   user: userReducer,
  },
});

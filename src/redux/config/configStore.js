import { configureStore } from '@reduxjs/toolkit';

import postModule from '../modules/postModule';
import commentModule from '../modules/commentModule';

const store = configureStore({
  reducer: { postModule: postModule, commentModule: commentModule },
});

export default store;

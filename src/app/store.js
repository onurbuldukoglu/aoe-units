import { configureStore } from '@reduxjs/toolkit';
import agesReducer from '../features/ages/agesSlice';
import unitsReducer from '../features/units/unitsSlice';
import costsReducer from '../features/costs/costsSlice';
import detailReducer from '../features/detail/detailSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/sagas';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    age: agesReducer,
    units: unitsReducer,
    costs: costsReducer,
    detail: detailReducer,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

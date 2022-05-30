import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?: typeof compose;
    }
}

let store :any;

export function configureStore(initialState: any){
    const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

     store = createStore(
         reducers,
         initialState,
         composeEnhancers(applyMiddleware(...middlewares))
     );
     sagaMiddleware.run(rootSaga);
     return store;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
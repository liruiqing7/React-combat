import { createStore, applyMiddleware, compose} from 'redux'; //compose来自redux
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );

//创建store的时候用reducer构建初始数据，然后创建store的时候使用一个中间件，REDUX_DEVTOOLS也是一个中间件，所以使用数组的方式将两个中间件传入，中间件指的是redux的中间件。
const store = createStore( 
    reducer,
    enhancer
);//传入reducer，可以查看reducer中的数据。

export default store;
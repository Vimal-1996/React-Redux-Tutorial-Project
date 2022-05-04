import { legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
    )

export default store
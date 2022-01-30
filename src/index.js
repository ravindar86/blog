import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

ReactDom.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
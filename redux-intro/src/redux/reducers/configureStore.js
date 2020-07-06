import {createStore} from "redux";
import reducers from "./index";

export default function configureStore(){
    console.log('configureStore');
    return createStore(reducers)
}
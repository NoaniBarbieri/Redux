import { combineReducers } from "redux";
import clientesReducer from "./clientsreducer";

const rootReducer = combineReducers({
  clientes: clientesReducer,
});

export default rootReducer;

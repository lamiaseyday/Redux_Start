import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const reducers = combineReducers({
  //js de bu şekilde yazınca bu satırı
  //counterReducer : counterReducer olarak algılıyor.
  //js ye ait bi özellik.   
  CounterReducer,
});

export default reducers;

import {createStore} from 'redux';

import reducers from './index';

//bir state veritabanım var o veritabanının reducers ları kimler
//yane state'i yöneten nesneleri kimler
export default function ConfigureStore(){
    return createStore(reducers);
}
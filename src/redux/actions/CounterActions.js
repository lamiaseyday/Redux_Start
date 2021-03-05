//Asıl Aksiyon Yerimiz
//Aksiyonların burada tanımlarını yapıyoruz.
//Aksiyonlar obje dönüyor.
import * as ActionTypes from './ActionTypes';

export const increaseCounter=()=>({
    type:ActionTypes.INCREASE_COUNTER,
    payload:1 //1er olarak artırma
})

export const decreaseCounter=()=>({
    type:ActionTypes.DECREASE_COUNTER,
    payload:1 //1er olarak azaltma
})

export const increaseByTwoCounter=()=>({
    type:ActionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2 //2şer olarak artırma
})
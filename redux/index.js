import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'


// constants // for simplifying code and less error chances 

const inc = 'increment'
const dec = 'decrement'
const incByAmount = 'increaseByAmount'



// Store
const store = createStore(reducer,applyMiddleware(logger.default))


// action Creators
function increment(){
    return {type:inc}
}
function decrement(){
    return {type:dec}
}
function increaseByAmount(value){
    return {type:incByAmount,payload:value}
}

// Reducer function takes state and retursn new state,  here we have give an initial value of amount for practice..
function reducer(state={amount:1},action){
    if(action.type=== inc){
        return {amount:state.amount+1}
    }
    if(action.type=== dec){
        return {amount:state.amount-1}
    }
    if(action.type=== incByAmount){
        return {amount:state.amount+ action.payload}
    }
    return state
    }


// global state
// console.log(store.getState());

// Dispatch is a method through which action is passed to the reducer for updateing state
// type is the random name for actions ..
// store.dispatch({type:'increment'})


setInterval(()=>{
    store.dispatch(increaseByAmount(5))
},2000)
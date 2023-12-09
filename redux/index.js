import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
// Store

const store = createStore(reducer,applyMiddleware(logger.default))


// Reducer function takes state and retursn new state,  here we have give an initial value of amount for practice..

function reducer(state={amount:1},action){
    if(action.type=== 'increment'){
        return {amount:state.amount+1}
    }
    if(action.type=== 'decrement'){
        return {amount:state.amount-1}
    }
    if(action.type=== 'incrementByAmount'){
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
    store.dispatch({type:'incrementByAmount',payload:4})
},2000)
import {createStore} from 'redux'

// Store

const store = createStore(reducer)


// Reducer function takes state and retursn new state,  here we have give an initial value of amount for practice..

function reducer(state={amount:1},action){
    if(action.type=== 'increment'){
        return {amount:state.amount+=1}
    }
    return state
    }


// global state
console.log(store.getState());

// Dispatch is a method through which action is passed to the reducer for updateing state
// type is the random name for actions ..
store.dispatch({type:'increment'})

// Here the value will be updated
console.log(store.getState());

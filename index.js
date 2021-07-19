const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore 
const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY-ICECREAM'

              //action
function buycake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'second redux acction'
    }
}

                //(previousState, action) => newState

// const initialState = {
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState ={
    numOfCakes:10
}

const initialIceCreamState ={
    numOfIceCreams:20
}

                   //reducer functions

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes -1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams -1
//         }

//         default: return state
//     }
// }

                     //cake reducer
const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}

                       //ice cream reducer
const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }

        default: return state
    }
}

                        //redux store
const rootReducer = combinedReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})                        
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
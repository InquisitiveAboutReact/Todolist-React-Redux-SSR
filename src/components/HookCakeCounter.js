import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux';

// UseSelector is a Hook , react-redux library provides which acts as a close equivalent to
//... mapStateToProps. So to get hold of any state in Redux Store, we use UseSelector hooks
// UseDispatch dispatches an action from react-redux

function HookCakeCounter() {

    const NumOfCakes = useSelector (state => state.cakeReducer.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number Of Cakes : {NumOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeCounter



import React from 'react'
import Foot from '../views/global/Foot'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../redux/reducers/counter'

const Plan = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    function handleClick(event) {
        dispatch(increment(event.target.value))
    }

    return (
        <React.Fragment>
            <span>Counter: {count}<button onClick={handleClick}>Button</button></span>
            <Foot/>
        </React.Fragment>        
    )
}

export default Plan
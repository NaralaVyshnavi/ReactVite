import {useSelector,useDispatch} from 'react-redux'
import { dec, inc } from './counterSlice';

function Counter(){
    const {count}=useSelector(state=>state.counterReducer)
    var dispatch=useDispatch();
    return (
        <div className='myBox'>
            <h1>Counter</h1>
            <h2>Count:{count}</h2>
            <button onClick={()=>{
                dispatch(inc())
            }}>+</button>
            <button onClick={()=>{
                dispatch(dec())
            }}>-</button>
        </div>
    )
}
export default Counter
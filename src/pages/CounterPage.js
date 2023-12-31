import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
// import useCounter from '../hooks/use-counter';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

 const reducer = (state, action) => {
   switch(action.type){
    case INCREMENT_COUNT:
    return {
        ...state,
        count: state.count + 1
    
    }
    case DECREMENT_COUNT:
        return {
            ...state,
            count: state.count - 1
        }
    case SET_VALUE_TO_ADD:
        return {
            ...state,
            valueToAdd: action.payload
        }
    case ADD_VALUE_TO_COUNT:
        return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0
        }

    default:
        return state;
   }
 }

function CounterPage({initialCount}) {

    // const { count, incrementCount } = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount, valueToAdd: 0
    })
    const increment = () => {
        // setCount((currentCount) => {
        //     return currentCount + 1;
        // })

        dispatch({
            type: 'increment'
        });
    }

    const decrement = () => {
        // setCount((currentCount) => {
        //     return currentCount - 1;
        // })

        dispatch({
            type: 'decrement'
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        // setValueToAdd((current) => {
        //     return current + value;
        // })
        dispatch({

            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // setCount((current) => {
        //     return count + valueToAdd
        // })

        // setValueToAdd(0)
        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count}</h1>

            <div className='flex flex-row gap-2'>
                <Button onClick={increment} primary>Increment</Button>
                <Button onClick={decrement} primary>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add a lot</label>
                <input value={state.valueToAdd || ''} 
                 onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>

        </Panel>
    )

}


export default CounterPage;
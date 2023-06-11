import {useState, useEffect} from 'react'

function useCounter(initialCount) {

    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(`count is ${count}`);
    }, [count])


    const incrementCount = () => {
        setCount((currentCount) => {
            // console.log(`currentCount is ${currentCount}`);
           return count + 1;
        })
    }

    return {
        count,
        incrementCount
    }
}

export default useCounter;
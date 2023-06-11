import {useState} from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';
function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex,eve) => {
        // event object 
        // console.log(eve.target);


        // Functional way of updating state with setter function 
        // we use it when state has many many different pieces 
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        })

        // Simple/Normal way of updating state with setter function
        // if(expandedIndex === nextIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    }

    const renderedItems = items.map((item, index) => {
       const isExpanded = index === expandedIndex;
       const icon = <span className='text-2xl'>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
       </span>
        return (
            <div key={item.key}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={(eve) => handleClick(index, eve)}>{item.label}
                {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        )
    })

    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    )
}

export default Accordion;
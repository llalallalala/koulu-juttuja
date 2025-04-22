import * as React from 'react';

export function Napit(propsArray)
{
    const [id, setId] = propsArray.props

    function increase()
    {
        if (id < 10) {
            setId(id+1)
        }
    }

    function decrease()
    {
        if (id > 1) {
            setId(id-1)
        }
    }

    return(
        <div className='napit'>

            <button onClick={decrease}>-</button>
            <p>{id}</p>
            <button onClick={increase}>+</button>

        </div>
    )
}
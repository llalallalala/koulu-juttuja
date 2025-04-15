import * as React from 'react'

function Lista({listaTiedot})
{
    return(
        <div>
            <ul>
                {
                    listaTiedot.map( (item,index)=>(
                        <li key={index}>{item}</li>
                    ) )
                }
            </ul>
        </div>
    )
}

export default Lista
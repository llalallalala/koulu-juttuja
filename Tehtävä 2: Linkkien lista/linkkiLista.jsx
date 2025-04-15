import * as React from 'react'

function Linkkilista({listaTiedot})
{
    return(
        <div>
            <ul>
                {
                    listaTiedot.map( (item,index)=>(
                        <li key={index}><a href={item.url}>{item.nimi}</a></li>
                    ) )
                }
            </ul>
        </div>
    )
}

export default Linkkilista
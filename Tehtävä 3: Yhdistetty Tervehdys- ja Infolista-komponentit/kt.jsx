import * as React from 'react'

function Kayttajakortti(tiedot)
{
    console.log(tiedot.lista)
    return(
        <div>
            <h1>Hei, {tiedot.nimi}!</h1>
            <ul>
                {
                    tiedot.lista.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Kayttajakortti
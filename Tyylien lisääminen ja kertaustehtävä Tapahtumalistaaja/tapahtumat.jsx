import * as React from 'react'

export function Tapahtumat(propsArray)
{
    const [tapahtumat, setTapahtuma] = propsArray.props
    const [haku, setHaku] = React.useState('')
    
    if (tapahtumat.length < 1) {
        return(
            <div className='tapahtumatDiv'>
                <p id='nollaTapahtumaa'>Ei tapahtumia lol</p>
            </div>
        )
    }

    function poistaTapahtuma(e)
    {
        setTapahtuma([...tapahtumat].filter((item)=>item.uniqueID != e.target.id))
    }

    function filterKäsittely(item)
    {
        return (item.nimi.toLowerCase().includes(haku.toLowerCase()) || item.kategoria.toLowerCase().includes(haku.toLowerCase()))
    }

    return(
        <div className='tapahtumatDiv'>

            <div>
                <input className='tapahtumaHaku' onChange={   (e)=>setHaku(e.target.value)  } placeholder='nimi tähän :D' />
            </div>
            <br />
            <br />
            <ul>
                {tapahtumat.filter((item)=>filterKäsittely(item)).map((item,index)=>(
                    <li className={`tapahtuma ${item.kategoria}`} key={index} style={{backgroundColor:`rgb(${item.bgCol.r},${item.bgCol.g},${item.bgCol.b})`}}>
                        <h2 className='tapahtumaTxt'>{item.nimi}</h2>
                        <p className='tapahtumaTxt'>{new Date(item.pvm).getFullYear()}-{new Date(item.pvm).getMonth()}-{new Date(item.pvm).getDate()}</p>
                        <p className='tapahtumaTxt'>{item.kategoria}</p>
                        <button id={item.uniqueID} onClick={poistaTapahtuma} className='poistaNappi'>Poista</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
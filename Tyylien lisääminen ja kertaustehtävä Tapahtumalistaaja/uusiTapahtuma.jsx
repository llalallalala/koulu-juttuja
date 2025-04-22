import * as React from 'react'

export function TapahtumanLisays(propsArray)
{
    const [tapahtumat, setTapahtumat] = propsArray.props

    const [uusiNimi, setUusiNimi] = React.useState("")
    const [uusiPvm, setUusiPvm] = React.useState(Date.now())
    const [uusiKategoria, setUusiKategoria] = React.useState("")

    function luoTapahtuma()
    {
        if (uusiNimi.length < 1 ||
           (uusiKategoria === '' || uusiKategoria === 'Valitse kategoria'))
        
        {
            return
        }

        else
        {
            setTapahtumat([...tapahtumat, {
                nimi: uusiNimi,
                pvm: uusiPvm,
                kategoria:uusiKategoria,
                uniqueID: Math.random()*Date.now(),
                bgCol:
                {
                    r:255*Math.random(),
                    g:255*Math.random(),
                    b:255*Math.random()
                }
            }])

            setUusiNimi('')
            setUusiPvm(Date.now())
            setUusiKategoria('')
            document.getElementById('selectCat').value = 'Valitse kategoria'
        }
    }

    return (
        <div className='uusiTapahtumaDiv'>
            <input onChange={      (e)=>setUusiNimi(e.target.value)        } type='text' placeholder='Tapahtuman nimi' /><br />
            <input onChange={      (e)=>setUusiPvm(e.target.value)         } type='date' /><br />

            <select id='selectCat' onChange={     (e)=>setUusiKategoria(e.target.value)   } defaultValue={'Valitse kategoria'}>

                <option disabled>Valitse kategoria</option>
                <option>Urheilu</option>
                <option>Musiikki</option>
                <option>Opiskelu</option>

            </select><br />
            
            <button onClick={luoTapahtuma}>Lisää tapahtuma</button>
        </div>
    )
}
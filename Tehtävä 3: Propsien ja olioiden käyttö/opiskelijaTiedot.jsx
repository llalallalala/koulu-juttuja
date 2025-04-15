import * as React from 'react';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

function OpiskelijaTiedot(tiedot)
{
    return(
        <div>
            <h1>Opiskelija bla bla</h1>
            <p>nimi: {tiedot.nimi}</p>
            <p>ikä: {tiedot.ika}</p>
            <p>kurssi: {tiedot.kurssi}</p>
        </div>
    )
}

export default OpiskelijaTiedot
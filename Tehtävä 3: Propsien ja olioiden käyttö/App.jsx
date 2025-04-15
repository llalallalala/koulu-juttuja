import * as React from 'react'
import OpiskelijaTiedot from './opiskelijaTiedot'

function App() {

  const tiedot = { nimi: "Matti Meikäläinen", ika: 16, kurssi: "Reactin perusteet"}

  return (
    <div>
      <OpiskelijaTiedot nimi={tiedot.nimi} ika={tiedot.ika} kurssi={tiedot.kurssi}/>
    </div>
  )
}

export default App

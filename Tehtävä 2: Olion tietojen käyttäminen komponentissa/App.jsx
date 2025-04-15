import * as React from 'react'
import opiskelijaTiedot from './opiskelijaTiedot'

function App() {

  const tiedot = opiskelijaTiedot()

  return (
    <div>
      <p>nimi: {tiedot.nimi}</p>
      <p>ikä: {tiedot.ika}</p>
      <p>kurssi: {tiedot.kurssi}</p>
    </div>
  )
}

export default App

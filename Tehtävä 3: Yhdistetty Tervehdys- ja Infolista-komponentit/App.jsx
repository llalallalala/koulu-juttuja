import * as React from 'react'
import Kayttajakortti from './kt'

function App() {
  return (
    <div>
      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />
    </div>
  )
}

export default App

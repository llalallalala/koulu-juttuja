import * as React from 'react'
import Lista from './lista'

function App() {

  const tiedot = ["React", "JavaScript", "CSS"]

  return (
    <div>
      <Lista listaTiedot={tiedot}/>
    </div>
  )
}

export default App

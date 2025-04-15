import * as React from 'react'
import Linkkilista from './linkkiLista'

function App() {

  const linkit = [{nimi: "Google", url: "https://google.com"}, {nimi: "React", url: "https://react.dev"}]

  return (
    <div>
      <Linkkilista listaTiedot={linkit}/>
    </div>
  )
}

export default App

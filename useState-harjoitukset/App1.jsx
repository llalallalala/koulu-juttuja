import * as React from 'react'

function App() {

  const [count, uc] = React.useState(0)

  function onclicklol()
  {uc(count+1)}
  function onclicklol2()
  {uc(count+2)}
  function bbbbbb2()
  {uc(count-1)}
  function bbbbbb3()
  {uc(0)}

  return (
    <div>
      <p>{count}</p>
      <Kasvata bbbbbb={onclicklol} />
      <KasvataX2 bbbbbb={onclicklol2} />
      <Laske bbbbbb={bbbbbb2} />
      <Nollaa bbbbbb={bbbbbb3} />
    </div>
  )
}

function Kasvata({bbbbbb}){
  return(
    <button onClick={bbbbbb} >kasvata</button>
  )
}
function KasvataX2({bbbbbb}){
  return(
    <button onClick={bbbbbb} >kasvata 2X</button>
  )
}

function Laske({bbbbbb}){
  return(
    <button onClick={bbbbbb} >laske</button>
  )
}

function Nollaa({bbbbbb}){
  return(
    <button onClick={bbbbbb} >nollaa</button>
  )
}



export default App

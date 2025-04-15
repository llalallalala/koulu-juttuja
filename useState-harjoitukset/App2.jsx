import * as React from 'react'

function App() {

  const [count, uc] = React.useState(0)

  function bbbbbb(){uc(count+1)}
  function bbbbbb2(){uc(count-1)}
  function bbbbbb3(){uc(0)}

  return (
    <div>
      <p>{count}</p>
      <button onClick={bbbbbb} >kasvata</button>
      <button onClick={bbbbbb2} >laske</button>
      <button onClick={bbbbbb3} >nollaa</button>
    </div>
  )
}

export default App

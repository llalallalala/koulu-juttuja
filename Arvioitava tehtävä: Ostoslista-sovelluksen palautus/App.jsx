import * as React from 'react'
import { Header } from './header'

import './styles.css'

function App() {
  const [value, state] = React.useState([])
  const [inputVal, inputValState] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    let addNew = true

    value.forEach(e=>{
      if (e.nimi === inputVal) {
        e.maara += 1
        addNew = false
      }
    })

    if (addNew) {
      state([...value, {nimi:inputVal,maara:1}])
    }
    
    inputValState("")
  }

  function handleRemove(e) {
    const remove = e.target.id.slice(2,e.target.id.length)
    let newVal = value

    value.forEach(e=>{
      if (e.nimi === remove) {
        if (e.maara-1 <= 0)
          {
            newVal = value.filter((val)=>val.nimi !== e.nimi)
          }

        else {
          e.maara -= 1
          newVal = value
        }
      }
    })

    state([...newVal])
  }

  return (
    <div>
      <Header />
      <Form handleSubmit={handleSubmit} setInputValue={inputValState} inputValue={inputVal} />
      <ItemList val={value} remove={handleRemove} />
    </div>
  )
}

function ItemList(props)
{
  return (
    <div class={"OstosDiv"}>
      {props.val.map((element,index) =>(
        <button class={"btnOstos"} id={"P:"+element.nimi} onClick={props.remove} key={index}>{element.nimi} x{element.maara}</button>
      ))}
    </div>
  )
}

function Form(props)
{
  return (
    <form class={"OstosForm"} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita ostos"
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <button type="submit">Lisää</button>
    </form>
  );
}

export default App

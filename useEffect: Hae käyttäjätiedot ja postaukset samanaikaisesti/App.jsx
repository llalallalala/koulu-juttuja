import * as React from 'react'
import { Napit } from './napit'
import { Postaukset } from './postaukset'
import { UserInfo } from './userInfo'

import './styles.css'

function App() {
  const [id, setId] = React.useState(1)
  const [posts, setPosts] = React.useState([])

  return (
    <div>

      <p>User selected lol:</p>
      <Napit props={[id,setId]} />

      <UserInfo props={[id]}/>

      <Postaukset props={[posts, setPosts, id]} />

    </div>
  )
}

export default App

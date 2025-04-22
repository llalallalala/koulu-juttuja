import * as React from 'react'
import { TapahtumanLisays } from './uusiTapahtuma'
import { Tapahtumat } from './tapahtumat'

import './App.css'
import './uusiTapahtuma.css'
import './tapahtumat.css'

function App() {
  const [tapahtumat, setTapahtumat] = React.useState([])

  return (
    <div className='oiiirocmgrcmpaorgjrpcaifjiaoiajmciwajgjgpcajppgpaoiwgjawojiwajgicawmgcwogjcpwogjwgjawijcgmawojgimaowgjcimaigjcmagijcmaroijcgareojcmreojcigmeaorcmraocjmgareopjcmearpojcmieproajgaprejmiaporejcmigeaprjgaeprojigerpojcpig'>
      <h1 id='otsikko'>Tapahtumalistaaja</h1>

      <TapahtumanLisays props={[tapahtumat, setTapahtumat]} />
      <Tapahtumat props={[tapahtumat, setTapahtumat]} />

    </div>
  )
}

export default App
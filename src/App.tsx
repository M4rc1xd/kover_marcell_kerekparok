import { useState, useEffect } from 'react'
import type {Kerekpar} from './components/kerekpar'

function App() {
  const [kerekparok, setKerekparok] = useState<Kerekpar[]>([])

  useEffect (() => {
    async function adatokBeolvasasa() {
      const response = await fetch("/kerekparok.json")
      const data = await response.json()
      setKerekparok(data)
    }
    adatokBeolvasasa()
  }, [])

  // let legolcsobbKerekpar = kerekparok[0].napiDij
  // let legdragabbKerekpar = kerekparok[0].napiDij
  // for (let kerekpar of kerekparok) {
  //   if (kerekpar.napiDij < legolcsobbKerekpar) {
  //     legolcsobbKerekpar = kerekpar.napiDij
  //   }
  //   if (kerekpar.napiDij > legdragabbKerekpar) {
  //     legdragabbKerekpar = kerekpar.napiDij
  //   }
  // }
  console.log(kerekparok)
  return (
    <>
    <h1>Kiadó kerékpárok</h1>
    <p>kerekparok szama: {kerekparok.length}</p>
    {/* <p>legolcsobb kerékpár: {legolcsobbKerekpar}</p>
    <p>legdrágább kerékpár: {legdragabbKerekpar}</p> */}
    </>
  )
}

export default App

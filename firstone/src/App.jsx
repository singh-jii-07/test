import { useState } from 'react'
import Show from './component/Show/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Show/>
   </div>
  )
}

export default App

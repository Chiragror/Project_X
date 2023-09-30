import React from 'react'
import Header from './components/Header'
var router = require('browser-router');

const App = () => {
  return (
    <div>
      <browserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Header/>} />
            
          </Route>
        </Routes>

        <br></br>
      </browserRouter>
      
    </div>
  )
}

export default App

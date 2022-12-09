import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <Navbar></Navbar>
    </div>
  )
}

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'></ul>
    </nav>
  )
}

export default App
      
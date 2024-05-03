import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MessageFeature from './components/MessageFeature'
import ExploreMore from './components/ExploreMore'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <MessageFeature/>
      <ExploreMore/>
    </div>
  )
}

export default App

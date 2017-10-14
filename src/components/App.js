import React from 'react'
import '../App.css';
import Header from '../component/Header'
import Filters from '../component/Filters'
// import AddCard from '../containers/AddCard'
import VisibleCardList from '../containers/VisibleCardList'

const App = () => (
  <div>
    <Header />
    {/* <AddCard /> */}
    <Filters />
    <VisibleCardList />
  </div>
)

export default App
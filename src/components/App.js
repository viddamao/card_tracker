import React from 'react'
import '../css/App.css';
import Header from './Header'
import Filters from './Filters'
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
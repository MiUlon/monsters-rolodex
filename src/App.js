import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, []);

  const onSearchFieldChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'
        onSearchFieldChange={onSearchFieldChange}
        placeholder='Search Monsters'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}
  

export default App;
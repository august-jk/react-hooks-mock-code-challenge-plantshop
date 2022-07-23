import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLocaleLowerCase()))
  function onSearch(e) {
      setSearch(e.target.value)
  }
  function addNewPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "name": plants.name,
        "image": plants.image,
        "price": parseFloat(plants.price)
      })
    })
    .then(r => r.json())
    .then(setPlants([...plants, newPlant]))
  }
  return (
    <div className="app">
      <Header />
      <PlantPage plants={filteredPlants} onSearch={onSearch} onAddNewPlant={addNewPlant}/>
    </div>
  );
}

export default App;

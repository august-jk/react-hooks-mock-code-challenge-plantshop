import React, { useState } from "react";

function NewPlantForm({ onAddNewPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: 0.00
  })
  function handleSubmit(e) {
    e.preventDefault();
    onAddNewPlant(newPlant)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name={newPlant.name} placeholder="Plant name" onChange={(e) => setNewPlant({
          name: e.target.value,
          image: newPlant.image,
          price: newPlant.price,
        })}/>
        <input type="text" name={newPlant.image} placeholder="Image URL" onChange={(e) => setNewPlant({
          name: newPlant.name,
          image: e.target.value,
          price: newPlant.price
        })}/>
        <input type="number" name={newPlant.price} step="0.01" placeholder="Price" onChange={(e) => setNewPlant({
          name: newPlant.name,
          image: newPlant.image,
          price: parseFloat(e.target.value)
          })}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

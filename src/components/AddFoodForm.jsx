import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageInput(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCaloriesInput(event.target.value);
  };
  const handleServingsChange = (event) => {
    
    setServingsInput(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };
    props.addNewFood(newFood);

    setNameInput("");
    setCaloriesInput(0);
    setImageInput("")
    setServingsInput(0)
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={nameInput} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input
        value={imageInput}
        placeholder="http://example.com/food-image.jpg"
        type="text"
        onChange={handleImageChange}
      />

      <label>Calories</label>
      <Input
        value={caloriesInput}
        type="number"
        onChange={handleCaloriesChange}
      />

      <label>Servings</label>
      <Input
        value={servingsInput}
        type="number"
        onChange={handleServingsChange}
      />

      <button type="submit" onClick={handleForm}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;

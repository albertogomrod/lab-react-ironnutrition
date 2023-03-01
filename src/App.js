import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [comidas, setComidas] = useState(foods);
  const [comidasDisplay, setComidasDisplay] = useState(foods);
  const [isFormShowing, setIsFormShowing] = useState(false);

  const addNewFood = (newFood) => {
    setComidas([...comidas, newFood]);
    setComidasDisplay([...comidasDisplay, newFood]);
  };

  const filterFood = (searchInput) => {
    const filteredFood = comidas.filter((cadaComida) => {
      if (cadaComida.name.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(filteredFood);
    setComidasDisplay(filteredFood);
  };

  const showForm = () => {
    if (isFormShowing === true) {
      setIsFormShowing(false);
    } else {
      setIsFormShowing(true);
    }
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      {isFormShowing === true ? <AddFoodForm addNewFood={addNewFood} /> : null}

      <Button onClick={showForm}> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search filterFood={filterFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {comidasDisplay.map((cadaComida) => {
          return <FoodBox key={cadaComida.name} food={cadaComida} />;
        })}
      </Row>
    </div>
  );
}

export default App;

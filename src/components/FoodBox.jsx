import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  const removeFood = (comidaBorrada) => {
    const removeFood = props.filterFood.filter((cadaComida) => {
      if (cadaComida === comidaBorrada) {
        return false;
      } else {
        return true;
      }
    });
    props.filterFood(removeFood);
  };

  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.servings}</p>
        <p>
          <b>
            Total Calories:{props.food.calories} * {props.food.servings}{' '}
          </b>{' '}
          kcal
        </p>
        <Button type="primary" onClick={() => removeFood(props.food)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

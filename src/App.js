import './App.css';
import foods from "./foods.json";
import { Food } from "./Components/Food/index.js"
import { AddFood } from './Components/AddFood';


function App() {
  return (
    <div className="App">
  
      <div className='all' >
      <AddFood></AddFood>
        {foods.map((currentFood) => {
      return (
      <Food name={currentFood.name} img={currentFood.image} calories={currentFood.calories} servings={currentFood.servings} />
      )
    })}
    </div>
      
    </div>
  );
}

export default App;

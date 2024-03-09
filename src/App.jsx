
import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './user';

function App() {

  function handleClick(){
    alert("Button Clicked");
  }

  const handleClick2 = () =>{
    alert("Button Clicked 2");
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => addToFive(3)}>Click 3</button>
      
      
    </>
  )
}

export default App

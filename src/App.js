import './App.css';
import { useState } from "react";
import { Button } from "reactstrap";

function App() {
  const [sayi,setsayi] = useState(0);

  const increase = () =>{
    setsayi(sayi + 1);
  }

  const decrease = () =>{
    setsayi(sayi - 1);
  }

  return (
    <div className="App">

      <h1>currently value: {sayi}</h1>
      
      <Button onClick={increase}>increase</Button>
      <Button onClick={decrease}>decrease</Button>

    </div>
  );
}

export default App;

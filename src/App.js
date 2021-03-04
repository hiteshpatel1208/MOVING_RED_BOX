import Greenbox from "./Components/GreenBox";
import Redbox from "./Components/RedBox";

import './App.css';
import { useState } from "react";

function App() {

  const [moveCar, setMoveCar] = useState(false);

  const handleMove = () => {
    setMoveCar(prevState => !prevState);
  };

  return (
    <div className="App">
      <Greenbox>
        <div onClickCapture={handleMove}>
          <Redbox moveCar={moveCar} />
        </div>
      </Greenbox>
    </div>
  );
}

export default App;

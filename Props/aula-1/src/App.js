import { SayMyName } from "./Components/SayMyName";
import './App.css';

function App() {

  let name = " Maria ";
  return (

    <div className="App">
       <h1> Talking about props</h1>
      <SayMyName name="John" />
      {/* first way to do*/}
      <SayMyName name={name} />
      {/* second way to do*/}
    </div>
  );
}

export default App;

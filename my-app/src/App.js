import About from "./About";
import date from "./data";
import Home from "./Home";
import time,{name,gender} from './data'
import Example from "./example";

function App() {
  return (
    <>
    <h1> This is App.js </h1>
    <Home/>
    <About/>
    <h1>
      This is {name}, {gender} and {time}
    </h1>
    <Example/>
    </>
  );
}

export default App;

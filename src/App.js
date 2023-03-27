import React from "react";
import { Provider } from "react-redux";
import Nav from "./Navbar/Nav";
import Routing from "./Routing/Routes";
import store from "./Store/Store";

function App() {

  store.subscribe(()=>{
    localStorage.setItem('reduxStore',JSON.stringify(store.getState()))
  })
  return (
    
      <div className="App">

    <Provider store={store}>

 <Nav/>
 <Routing/>
    </Provider>
      </div>

  );
}

export default App;

import './App.css';
import {Routes, Route} from "react-router-dom";
import ToDoList from "./components/ToDoList.js";
import Counter from "./components/Counter.js";
import RandomFact from "./components/RandomFact.js";
import Currency from './components/Currency.js';
import Layout from "./components/Layout.js";
import Wrapper from './StyledComponents/Wrapper';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="ToDoList" element={<ToDoList />}/>
          <Route path="Counter" element={<Counter />}/>
          <Route path="RandomFact" element={<RandomFact />}/>
          <Route path="Currency" element={<Currency />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;

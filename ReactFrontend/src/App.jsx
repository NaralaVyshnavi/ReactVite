
import { Provider } from "react-redux";
import Counter from "./Counter";
import Todolist from "./Todolist";
import Products from "./products";

function App() {
  return (
 
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
        <Counter/>
       <Todolist></Todolist>
       <Products></Products>
    </div>
  );
}

export default App;
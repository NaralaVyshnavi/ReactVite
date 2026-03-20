import { Link, Outlet } from "react-router-dom";
import Counter from "./Counter";
import Todolist from "./Todolit";
function App() {
  return (
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
        <Counter/>
        <Todolist/>
    </div>
  );
}

export default App;
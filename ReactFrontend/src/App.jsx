
import { Provider } from "react-redux";


import { Link ,Outlet} from "react-router-dom";

function App() {
  return (
 
    <div className="mybox">
      <h1 className="bg-dark text-info">
        Welcome to Enterprise Level ReactJS Application Development
      </h1>
        <Link to="/counter">Counter</Link>
        <br />
        <Link to='/todolist'>Todolist</Link>
        <br />
        <Link to='/products'>Products</Link>
        <br />
        <Link to='/todos'>Todos</Link>
        <br />
        <Link to='/studentsForm'>Form</Link>
        <div>
          <Outlet></Outlet>
        </div>
    </div>
  );
}

export default App;

import { Provider } from "react-redux";


import { Link ,Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
 
    <div className="mybox">
      <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
    </div>
  );
}

export default App;
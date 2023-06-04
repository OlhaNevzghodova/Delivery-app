import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <div>
        <nav className=" bg-amber-300 text-white font-semibold font-mono tracking-wider">
          <ul className="flex flex-row">
            <li className="grow p-5 text-center hover:cursor-pointer hover:bg-amber-500">
              <Link to='/'>Shop</Link>
            </li>
            <li className="grow p-5 text-center hover:cursor-pointer hover:bg-amber-500">
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Shop/>}>
          </Route>
          <Route path='/cart'>
            {/*<Contact />*/}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

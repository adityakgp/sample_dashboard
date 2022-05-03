import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import './Components/Dashboard/Dashboard'
import Dashboard from './Components/Dashboard/Dashboard';
import Members from './Components/Members/Members';
import Signin from './Components/Authentication/Signin';
import Addproject from './Components/Projects/Addproject';
function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/addproject" element={<Addproject/>} />
      </Routes>
    </main>
  );
}

export default App;

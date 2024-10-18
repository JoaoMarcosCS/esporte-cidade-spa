import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
     <main>
      <Outlet/>
     </main>
    </div>
  );
}

export default App;

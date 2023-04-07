
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import Confirm from './Components/Confirm';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/details/:name' element={< Details/>}/>
        <Route path='/booked/:data' element={< Confirm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

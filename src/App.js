
import './App.css';
import Update from './crud/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewdata from './crud/Viewdata';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <BrowserRouter>

      {/* <Navbar></Navbar> */}
        <Routes>
          
          <Route path='/' element={<Viewdata/>}></Route>
          <Route path='/updatedata/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

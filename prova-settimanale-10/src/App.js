
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import MiaNavbar from './components/MiaNavbar';
import NotFoundPage from  './pages/NotFoundPage'
import PaginaCittà from './pages/PaginaCittà';

function App() {
  return (
    <BrowserRouter>
      <MiaNavbar />
      <Routes>
        <Route path="/" element={<Homepage />}/> 
        <Route path="/città/:lat/:lon" element={<PaginaCittà/>} />      
        <Route path="*" element={< NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

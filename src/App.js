import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="signIn/*" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

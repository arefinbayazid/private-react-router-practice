import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import AuthProvider from './Components/Contex/AuthProvider/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import Shop from './Components/Shop/Shop';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AuthProvider from './Components/Contex/AuthProvider/AuthProvider';

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path = "/" element = {<Home></Home>} />
            <Route path = "/home" element = {<Home></Home>} />
            <Route path = "/shop" element = {
              <PrivateRoute redirectTo="/login">
                <Shop></Shop>
              </PrivateRoute>
            } 
            />
            <Route path = "/login" element = {<LogIn></LogIn>} />
            <Route path = "/register" element = {<Register></Register>} />
          </Routes>
        </BrowserRouter>
    </AuthProvider>
        
  );
}

export default App;

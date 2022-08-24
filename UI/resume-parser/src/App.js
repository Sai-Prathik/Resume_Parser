import './App.css';
import './Styles.css'
import Header from "./Components/Header"; 
import Content from "./Components/Content"; 
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute'; 
import PostLogin from './Components/PostLogin';

function App() { 
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/Login" element={<Login/>}/>  
      <Route path="/Register"  element={<Register/>}/>   
      <Route path="/"  element={<PrivateRoute component={<PostLogin/>}/>}/> 
      
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

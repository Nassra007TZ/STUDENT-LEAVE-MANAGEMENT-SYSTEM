import {BrowserRouter, Route, Routes}from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import StudentleaveForm from "./Components/StudentleaveForm";
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/StudentleaveForm" element={<StudentleaveForm />}/>
      <Route path="/dashboard" element={<Dashboard />} />
 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

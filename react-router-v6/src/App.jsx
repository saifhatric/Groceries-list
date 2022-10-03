import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import SharedLayout from "./components/SharedLayout";
import About from "./components/About";
import Error from "./components/Error";
import Users from "./components/Users";
import SingleUser from './components/SingleUser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";



function App() {

  const [User, setUser] = useState("");



  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register User={User} setUser={setUser} />} />
          <Route path="login" element={<Login User={User} setUser={setUser} />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<SingleUser />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route >
      </Routes>

    </BrowserRouter>
  )
}

export default App;



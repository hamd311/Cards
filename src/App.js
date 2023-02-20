import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Home } from "./pages/login/home/Home";
import Account from "./pages/login/home/Account";
import Dashboard from "./pages/login/home/Dashboard";
import Edit from "./pages/login/home/Edit";
import Cardview from "./pages/login/home/Cardview";
import MakeCard from "./components/Tabcontent/MakeCard";

function App() {
       
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/edit/*" element={<Edit />}></Route>
        <Route path="/makecard" element={<MakeCard />}></Route>
        <Route path="/view" element={<Cardview />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

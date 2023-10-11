import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

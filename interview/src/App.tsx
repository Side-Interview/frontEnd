import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PasswordFind from "./pages/PasswordFind";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="password" element={<PasswordFind />}></Route>
        <Route path="reset" element={<PasswordReset />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

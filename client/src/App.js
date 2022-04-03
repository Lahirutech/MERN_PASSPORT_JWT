import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="protected" element={<Protected />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

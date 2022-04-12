import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";

import PrivateRoute  from "./hocs/PrivateRoute";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/protected"
            
            element={<PrivateRoute roles={["CLIENT", "ADMIN"]}> <Protected /> </PrivateRoute>}
          /> */}
          <Route
          path="/protected"
          element={
            <PrivateRoute roles={["CLIENT", "ADMIN"]}>
              <Protected />
            </PrivateRoute>
          }
        />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

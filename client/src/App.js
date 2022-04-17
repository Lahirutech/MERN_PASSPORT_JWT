import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";
import PrivateRoute from "./hocs/PrivateRoute";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
          path="/protected"
          element={
            <PrivateRoute roles={["CLIENT", "ADMIN"]}>
              <Protected />
            </PrivateRoute>
          }
          />
            <Route
          path="/profile" 
          element={
            <PrivateRoute roles={["CLIENT", "ADMIN"]}>
              <Profile/>
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

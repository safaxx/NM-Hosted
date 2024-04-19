import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Sidebar from "./Components/SideBar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <Sidebar />
          
          <Routes>
            
          <Route exact path="/contracts-list" element={<MainPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Post from "./components/Post/Post";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          />
          <Route path="/page/:page" element={<><Navbar /><Dashboard /></>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

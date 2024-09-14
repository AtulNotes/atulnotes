import Home from './components/Home/Home';
import Main from './components/docs/Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="docs" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;

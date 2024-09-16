import Home from './App/Home/Home';
import DocsPage from './App/docs/DocsPage';
import BlogPage from './App/blogs/BlogPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </Router>
  );
}

export default App;

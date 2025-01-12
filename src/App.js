import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Blog from './Components/Blog/Blog';
import Travelhome from './Components/Travelpages/Travelhome/Travelhome';
import Review from './Components/Footer/Review/Review';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/places" element={<Travelhome />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import BlogList from './Components/BlogList';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import LogIn from './Components/Auth/LogIn';
import SignIn from './Components/Auth/SignIn';
import FaceAnalyzer from './Pages/FaceAnalyzer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignIn />} />
        <Route path="/faceanalyzer" element={<FaceAnalyzer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

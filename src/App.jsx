import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Directory from './pages/Directory/Directory';
import Sign from './pages/Sign/Sign';



function App() {
  return (
    <body>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </body>
  );
}

export default App;

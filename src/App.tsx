import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Feedback from './pages/Feedback';
// import Contact from './pages/Contact';
import './App.css';

import ServicePage from './pages/ServicePage';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FFD700',
        },
      }}
    >
      <Router>
        <div className="flex flex-col ">
          <Navbar />
          <main className="flex-grow bg-black">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/service" element={<ServicePage />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;

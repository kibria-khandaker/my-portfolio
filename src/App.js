import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import MyPortfolio from './components/Pages/MyPortfolio';
import MyProjectDetails from './components/Pages/MyProjectDetails';
import NaveBar from './components/Pages/NaveBar';
// import HeroSection from './components/Common/HeroSection/HeroSection';

function App() {
  return (
    <div className='SideStkyMenu'>
      {/* <SideStkyMenu></SideStkyMenu> */}
      {/* <HeroSection></HeroSection> */}
      <NaveBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MyPortfolio" element={<MyPortfolio/> } />
        <Route path="/Contact" element={<Contact/> } />

        <Route path="/projectDetails/:id" element={<MyProjectDetails/> } />
        
      </Routes></NaveBar>
    </div>
  );
}

export default App;

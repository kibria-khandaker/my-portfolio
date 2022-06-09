import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import NaveBar from './components/Pages/NaveBar';
// import SideStkyMenu from './components/SideStkyMenu';
import JavaScriptProjects from './components/Pages/JavaScriptProjects/JavaScriptProjects';
import ReactProjects from './components/Pages/ReactProjects/ReactProjects';
import WordPressProjects from './components/Pages/WordPressProjects/WordPressProjects';
import MyPortfolio from './components/Pages/MyPortfolio';
import MyProjectDetails from './components/Pages/MyProjectDetails';
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
        <Route path="/projectDetails/:id" element={<MyProjectDetails/> } />
        <Route path="/JavaScriptProjects" element={<JavaScriptProjects/> } />
        <Route path="/ReactProjects" element={<ReactProjects/> } />
        <Route path="/WordPressProjects" element={<WordPressProjects/> } />
        
      </Routes></NaveBar>
    </div>
  );
}

export default App;

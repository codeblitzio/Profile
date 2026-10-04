import { Routes, Route } from 'react-router';
import Home from '../pages/home/Home';
import Education from '../pages/education/Education';
import Skills from '../pages/skills/Skills';
import Experience from '../pages/experience/Experience';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/notfound/NotFound';

function Routing() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
};

export default Routing;

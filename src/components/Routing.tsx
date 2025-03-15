import { FC } from 'react';
import { Routes, Route } from 'react-router';
import Profile from '../pages/profile/Profile';
import Education from '../pages/education/Education';
import Skills from '../pages/skills/Skills';
import History from '../pages/history/History';
import About from '../pages/about/About';
import NotFound from '../pages/notfound/NotFound';

const Routing: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Profile/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
};

export default Routing;

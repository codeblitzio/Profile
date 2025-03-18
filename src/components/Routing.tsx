import { FC } from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Education from '../pages/education/Education';
import Skills from '../pages/skills/Skills';
import History from '../pages/history/History';
import About from '../pages/about/About';
import NotFound from '../pages/notfound/NotFound';

const Routing: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/profile/education" element={<Education/>}/>
      <Route path="/profile/skills" element={<Skills/>}/>
      <Route path="/profile/history" element={<History/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
};

export default Routing;

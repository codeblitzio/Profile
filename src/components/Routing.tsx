import { FC } from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/home/Home';
import Profile from '../pages/profile/Profile';
import Education from '../pages/profile/education/Education';
import Skills from '../pages/profile/skills/Skills';
import History from '../pages/profile/history/History';
import Showcase from '../pages/showcase/Showcase';
import Weather from '../pages/showcase/weather/Weather';
import Footy from '../pages/showcase/footy/Footy';
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
      <Route path="/showcase" element={<Showcase/>}/>
      <Route path="/showcase/weather" element={<Weather/>}/>
      <Route path="/showcase/footy" element={<Footy/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
};

export default Routing;

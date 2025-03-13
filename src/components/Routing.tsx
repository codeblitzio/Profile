import { BrowserRouter, Routes, Route } from 'react-router';
import Profile from '../pages/profile/Profile';
import Education from '../pages/education/Education';
import Skills from '../pages/skills/Skills';
import History from '../pages/history/History';
import About from '../pages/about/About';
import NotFound from '../pages/notfound/NotFound';
import { IContentService } from '../services/content/ContentService';
import { FC } from 'react';

interface IRoutingProps {
  contentService: IContentService
}

const Routing: FC<IRoutingProps> = (props) => {

  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Profile contentService={props.contentService}/>}/>
        <Route path="/education" element={<Education contentService={props.contentService}/>}/>
        <Route path="/skills" element={<Skills contentService={props.contentService}/>}/>
        <Route path="/history" element={<History contentService={props.contentService}/>}/>
        <Route path="/about" element={<About contentService={props.contentService}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export type { IRoutingProps }
export default Routing

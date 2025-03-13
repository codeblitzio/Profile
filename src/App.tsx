import Header from './components/Header';
import Routing from './components/Routing';
import Footer from './components/Footer';
import ContentService from './services/content/ContentService';
import { FC } from 'react';

const App: FC = () => {

  const contentService = new ContentService();

  return (
    <>
      <Header/>   
      <Routing contentService={contentService}/>  
      <Footer contentService={contentService}/>
    </>
  )
}

export default App
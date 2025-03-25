import { BrowserRouter } from 'react-router';
import Routing from './components/Routing';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routing/>  
      <Footer/>
    </BrowserRouter>
  )
};

export default App;

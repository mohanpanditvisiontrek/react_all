import Show from './components/show';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/navbar';
import Upload from './components/upload';
import Contact from './components/contact';

function App() {


  return (
     <>
     <BrowserRouter>
     <Navbar />
      <Routes>
     <Route path='/'element={ <Show />} />
     <Route path='upload'element={ <Upload />} />
     <Route path='contact'element={ <Contact />} />
     <Route path='contact'element={ <Contact />} />
     <Route path='*'element={ <h1>sorry url not found</h1>} />

     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mantra from './components/Mantra/Mantra';
import Meditation from './components/Meditation/Meditation';
import Mindfulness from './components/Mindfulness/Mindfulness';
import Movement from './components/Movement/Movement';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <Router>
   <Navbar/>

    <Routes>
    <Route path="/" element={<Meditation/>}/>
          <Route path="/mind" element={<Mindfulness/>}/>
          <Route path="/movement" element={<Movement/> }/>
          <Route path="/mantra" element={<Mantra/> }/>
    </Routes>
    
   </Router>
  );
}

export default App;

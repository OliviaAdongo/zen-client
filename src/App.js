import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Mantra from './components/Mantra/Mantra';
import Meditation from './components/Meditation/Meditation';
import Mindfulness from './components/Mindfulness/Mindfulness';
import Movement from './components/Movement/Movement';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';

function App() {
  return (
   <Router>
   <Navbar/>
    
   
    

    <Routes>
    <Route path="/" element={<Meditation/>}/>
          <Route path="/mind" element={<Mindfulness/>}/>
          <Route path="/movement" element={<Movement/> }/>
          <Route path="/mantra" element={<Mantra/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
   </Router>
  );
}

export default App;

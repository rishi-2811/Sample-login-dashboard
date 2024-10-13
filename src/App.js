import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

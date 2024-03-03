import React, { useContext,useEffect,useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, reload } from "firebase/auth";
// import {getDatabase, ref, set} from "fir ebase/database"
import {app} from "./firebase"
import Sigup from './pages/Sigup';
import Signin from './pages/Signin';
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom';
import Demopage from './pages/Demopage';
import Input from './pages/Input';
import Show from './pages/Show';
import { MyContext } from './main';
import Home from './pages/Home';

// const db = getDatabase(app);
const auth = getAuth(app)
function App() {
  const { state } = useContext(MyContext);
  const [isLoggedin, setIsLoggedin] = useState(false);
  

  const handleLogin = () => {
    setIsLoggedin(true);
  };

  const handleLogout = () => {
    const navigate = useNavigate();
    reload(auth); // Reload authentication state
    navigate('/Home');
    setIsLoggedin(false);
    state.records.isloggedin =false;

  };

  useEffect(() => {
    console.log('isLoggedin changed:', isLoggedin);
  }, [isLoggedin]);
  return (
    <BrowserRouter>
    
  
{/* ---------------------------------------------------------
 */}
 <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    {!isLoggedin &&(
              <>
      <Link to="/Home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link to="/Sigup" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Sigup
      </Link>
      <Link to="Signin" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Signin
      </Link>
      </>
            )}  
    {isLoggedin &&(
              <>
      <Link to="/Signin/Input" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Input
      </Link>
      <Link to="/Signin/Input/Show" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Show
      </Link>
      <Link to="/Home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" onClick ={handleLogout}>
        Logout
      </Link>
      </>
            )} 
             
    </div>
      {/* <div>
        <Link href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</Link>
      </div> */}
  </div>
</nav>

    <Routes>
    <Route path="/Home" element={<Home />} />
      <Route path="/Signin" element={<Signin onLogin={handleLogin} />} />
      <Route path="/Signin/Input" element={<Input />} />
      <Route path="/Signin/Input/Show" element={<Show />} />
      <Route path="/Sigup" element={<Sigup />} />
    </Routes>
  </BrowserRouter>
)
}

export default App;
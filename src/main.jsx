import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { is, reducer } from './Reducer.js';
// import { FirebaseProvider } from './context/Firebase.jsx'
export const MyContext=React.createContext();

const Start=()=>{
  const [state, dispatch] = useReducer(is,reducer)
  return(
    <>
      <MyContext.Provider value={{ state: { records: { isloggedin: false, currentuser: "" } } }}>
          <App/>
      </MyContext.Provider>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Start/>
)

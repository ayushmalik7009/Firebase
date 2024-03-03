import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
function Sigup() {
    const[data,setData]=useState({email:"",password:""});
    const handlesave = async () => {
        try {
          await createUserWithEmailAndPassword(auth, data.email, data.password);
          alert("Success");
          setData({ email: "", password: "" });
          console.log("Record has been saved");
          console.log(email,password);
        } catch (error) {
          console.error("Error creating user:", error);
          // Handle error here
        }
      };
    const handleChange=(e)=>{    
        // console.log(data.email)    
      setData({...data,[e.target.name]:e.target.value});
  }
  return (
    <>
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    {/* <!-- Left: Image --> */}
<div className="w-1/2 h-screen hidden lg:block">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" className="object-cover w-full h-full"/>
</div>
{/* <!-- Right: Login Form --> */}
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>

    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Username</label>
      <input type="email" value={data.email} onChange={handleChange} id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
    </div>
    {/* <!-- Password Input --> */}
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" value={data.password}  onChange={handleChange} id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off"/>
    </div>
    {/* <!-- Remember Me Checkbox --> */}
    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
      <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>
    {/* <!-- Forgot Password Link --> */}
    {/* <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div> */}
    {/* <!-- Login Button --> */}
    <button type="submit" onClick={handlesave} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign up</button>

</div>
</div>
    </>
  )
}

export default Sigup
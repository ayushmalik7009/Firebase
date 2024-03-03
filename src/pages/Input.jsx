import React,{useState} from 'react'
import { getDatabase, ref, set,push } from "firebase/database";
import { app } from '../firebase';
import { useContext } from 'react';
import { MyContext } from '../main';

const db  = getDatabase(app)
function Input() {
  const {state} = useContext(MyContext)
  const[data,setData]=useState({Date:"",Ticket:"",GrowerName:"",Quintal:"",Price:"",Payment:""});
  console.log()
  const handlesave = async() =>{

    try {
        const newDataRef = push(ref(db, `${state.records.currentuser}`)); // Generate a new unique key
        await set(newDataRef, {
          Date: data.Date,
          Ticket: data.Ticket,
          GrowerName: data.GrowerName,
          Quintal: data.Quintal,
          Price: data.Price,
          Payment: data.Payment
        });
        // set(ref(db, 'users/' + userId), {
        //   name: data.name,
        //   age: data.age,
        //   email: data.email
        // });
        setData({Date:' ',Ticket:' ',GrowerName:' ',Quintal:' ',Price:' ',Payment:' '});
        console.log('New record has been added');
      } catch (error) {
        console.error('Error adding new record: ', error);
      }
    };
  const handleChange=(e)=>{        
    setData({...data,[e.target.name]:e.target.value});
}

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Add Data Form
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Date
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="Date"
              type="Date"
              value={data.Date}
              onChange={handleChange}
              // autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Ticket Number
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="Ticket"
              type="Number"
              value={data.Ticket}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Grower Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="GrowerName"
              type="text"
              value={data.GrowerName}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
           Quintal
          </label>
          <div className="mt-2">
            <input
              id="number"
              name="Quintal"
              type="number"
              value={data.Quintal}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Price
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="Price"
              type="Number"
              value={data.Price}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Payment
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="Payment"
              type="text"
              value={data.Payment}
              onChange={handleChange}
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='py-4'>
          <button
            type="submit"
            onClick={handlesave}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Data
          </button>
        </div>
   
    </div>
  </div> 
    </>
  )
}

export default Input
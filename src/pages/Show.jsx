import React, { useState, useEffect, useContext } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { MyContext } from '../main';

const dbRef = ref(getDatabase());

function Show() {
    const { state } = useContext(MyContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const usersRef = child(dbRef, `${state.records.currentuser}`);
            get(usersRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const usersData = snapshot.val();
                    const usersArray = Object.keys(usersData).map((key) => ({
                        id: key,
                        ...usersData[key],
                    }));
                    setUsers(usersArray);
                    console.log(usersArray);
                } else {
                    console.log('No data available');
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        fetchData();
    }, []);

    const total = users.reduce((acc, user) => acc + parseFloat(user.Price), 0);
    const Total = Math.round((total + Number.EPSILON) * 100) / 100;  
    const totalNoPayment = users
  .filter(user => user.Payment === 'No')
  .reduce((acc, user) => acc + parseFloat(user.Price), 0); 
  const vacantpayment = Math.round((totalNoPayment + Number.EPSILON) * 100) / 100; 
    const totalcomePayment = users
  .filter(user => user.Payment === 'Yes')
  .reduce((acc, user) => acc + parseFloat(user.Price), 0); 
  const totalcome_Payment = Math.round((totalcomePayment + Number.EPSILON) * 100) / 100; 
    const quintal = users.reduce((acc, user) => acc + parseFloat(user.Quintal), 0);
    const totalQuintal = Math.round((quintal + Number.EPSILON) * 100) / 100;


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h5>
                    </div>
                    <div className="overflow-y-auto max-h-96">
                        <table className="table-auto border-collapse border border-gray-200">
                            <thead>
                                <tr>
                                    <th className='p-2 w-48 border border-gray-200 whitespace-nowrap'>Date</th>
                                    <th className='p-2 border border-gray-200'>Ticket Number</th>
                                    <th className='p-2 border border-gray-200'>Grower name</th>
                                    <th className='p-2 border border-gray-200'>Quintal</th>
                                    <th className='p-2 border border-gray-200'>Price</th>
                                    <th className='p-2 border border-gray-200'>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id} className="border border-gray-200">
                                        <td className='p-2 w-48 border border-gray-200 whitespace-nowrap'>{user.Date}</td>
                                        <td className='p-2 border border-gray-200'>{user.Ticket}</td>
                                        <td className='p-2 border border-gray-200'>{user.GrowerName}</td>
                                        <td className='p-2 border border-gray-200'>{user.Quintal}</td>
                                        <td className='p-2 border border-gray-200'>{user.Price}</td>
                                        <td className='p-2 border border-gray-200'>{user.Payment}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="border border-gray-200">
                                    <td className='p-2 w-48 border border-gray-200'></td>
                                    <td className='p-2 border border-gray-200'></td>
                                    <td className='p-2 border border-gray-200'></td>
                                    <td className='p-2 border border-gray-200'>{totalQuintal}</td>
                                    <td className='p-2 border border-gray-200'>{Total}</td>
                                    <td className='p-2 border border-gray-200'></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="mt-4">
                <p>कुल आया भुगतान : {totalcome_Payment}</p>
                <p>बकया राशि : {vacantpayment}</p>

            </div>
            </div>
        </>
    );
}

export default Show;

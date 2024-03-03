import React from 'react';

function Home() {
  return (
    <>
      <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1287089/pexels-photo-1287089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Website</h1>
        <div className="flex flex-col gap-4">
        </div>
      </div>
    </>
  );
}

export default Home;

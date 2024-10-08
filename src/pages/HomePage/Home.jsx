import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import Cookies from 'js-cookie';

const Home = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center bg-gray-700 w-1/2 mx-auto rounded-lg p-5 gap-4 mt-20">
                <FaHome size={65} />
                {
                  !Cookies.get("ip") && !Cookies.get("password") ?
                  (
                    <h1 className='text-2xl text-center'>Please login to get access!</h1>
                  ) : (
                    <h1 className='text-2xl text-center'>Welcome!</h1>
                  )
                }
                
                {
                  !Cookies.get("ip") && !Cookies.get("password") ? (
                    <div className='w-full flex flex-col'>
                      <Link className='text-center font-bold text-2xl bg-sky-700 w-1/2 mx-auto rounded-xl m-4 border-2 border-sky-500' to="/login">Login</Link>
                    </div>
                  ) : (
                    <div className='w-full flex flex-col'>
                      <Link 
                      className='text-center font-bold text-2xl bg-sky-700 w-1/2 mx-auto rounded-xl m-4 border-2 border-sky-500' 
                      to={`/explorer/${encodeURIComponent("./")}`}>Explorer</Link>
                    </div>
                  )
                }
          </div>
    </div>
  )
}

export default Home
import {FiMenu} from 'react-icons/fi'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import {useDispatch} from 'react-redux'
import { useState } from 'react';


function HomeLayout({children}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = true;
// useState((state)?.auth?.isLoggedIn);
    // const role = useState((state)?.auth?.role);
    const role='ADMIN';


    const closeSideBar = ()=>{
        const sidebar= document.getElementById('my-drawer');
        sidebar.checked=false;
    }

    const renderAdminLink = ()=>{
        if (isLoggedIn && role=='ADMIN') {
            return(
                <li><Link to='/admin/dashboard'>Admin Dashboard</Link></li>
            );
        }
        return null;
    }

    const handleLogout = async(e)=>{
        e.preventDefault();

        // const res=await dispatch(logout());
    }

    const loggedInLink = ()=>{
        if(isLoggedIn){
            return(
                <div className="absolute bottom-3">
                <div className="w-full flex items-center justify-center">
                    <button className="btn bg-red-500 text-white px-4 py-1 w-auto rounded-md font-semibold">
                     <Link onClick={handleLogout}>Log Out</Link>   
                    </button>
                </div>
                </div>
            )
        }
        else{
            return(
                <div className="absolute bottom-3">

                <div className="w-full flex items-center justify-between">
                    <button className="btn bg-green-400 text-white px-4 py-1 w-auto rounded-md fond-semibold">
                        <Link>Log In</Link>
                    </button>
                    <button className="btn border border-green-400 text-white px-4 py-1 w-auto rounded-md fond-semibold">
                        <Link>Register</Link>
                    </button>
                    
                </div>
                </div>
            )
        }
    }

    return (
        <div className='min-h-[90vh]'>
            <div className="drawer absolute left-0 z-50 w-fit">
                {/* This checkbox is used to open or close the checkbox */}
                <input type="checkbox" className="drawer-toggle" id="my-drawer" />

                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer-relative">
                        <FiMenu
                            size = {"32px"}
                            className='font-bold text-white p-1'
                        />
                    </label>
                </div>
                
                <div className="drawer-side">
                    <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'>
                    </label>

                    <ul className="menu min-h-full relative bg-base-100 text-base-content w-48 p-4 pt-8 ">
                        <li className='w-fit right-2 top-1 z-50 absolute'>
                            <IoMdCloseCircleOutline
                                className='font-bold text-white p-1'
                                size={"32px"}
                                onClick={closeSideBar}
                            />
                        </li>
                        <li><Link to="">Home</Link></li>
                        {renderAdminLink()}
                        <li><Link to="">About Us</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                        {loggedInLink()}

                    </ul>
                </div>
            </div>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default HomeLayout;
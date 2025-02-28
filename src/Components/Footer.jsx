import React from 'react'
import {BsFacebook, BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs';

export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();

    return(
        <div>
            <footer className='relative left-0 bottom-0 h-[20vh] py-5 flex flex-col items-center justify-center gap-10 text-white bg-gray-800'>
                <section className='text-lg'>
                    Copyright {year} | All rights reserved.
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook/>
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin/>
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter/>
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram/>
                    </a>
                </section>
            </footer>
        </div>
    )
}



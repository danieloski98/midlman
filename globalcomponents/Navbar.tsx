import React from 'react'
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full h-24 fixed bg-white px-20 flex justify-between items-center z-10 shadow-xl">
        <div>
          <Image src="/images/midlmanlogo.png" alt="midlman logo" width={200} height={50} />
        </div>
        <div className="flex sm:hidden md:hidden lg:flex xl:flex items-center justify-around xl:w-1/2 lg:w-2/3 text-sm">
          <p>About Us</p>
          <p>Blog</p>
          <p>Our Services</p>
          <p>Support</p>
          <p>Contact Us</p>
          <p>Help & FAQ</p>
          <div>
            <button className="p-3 rounded-md bg-maingreen text-xs text-white font-Poppins-Medium shadow">Get The App</button>
          </div>
        </div>
        <button className="xl:hidden lg:hidden md:block sm:block">
          <FiMenu />
        </button>
    </div>
  )
}

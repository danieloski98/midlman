import React from 'react'
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Divider
} from "@chakra-ui/react"

export default function Navbar() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div className="w-full h-24 fixed bg-white xl:px-20 lg:px-20 md:px-10 sm:px-10 flex justify-between items-center z-10 ">
        <div className="w-32 h-10">
          <img src="/images/midlmanlogo.png" alt="midlman logo" className="w-full h-full" />
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
          <FiMenu color="grey" size={30} onClick={() => setOpened(prev => !prev)} />
        </button>

        {/* drawer */}
        <Drawer isOpen={opened} onClose={() => setOpened(false)} placement="right">
          <DrawerOverlay />
          <DrawerContent>

          <div className="flex flex-col items-center justify-around text-sm mt-16 w-full">
          <p className="mb-4">About Us</p>
          <p className="mb-4">Blog</p>
          <p className="mb-4">Our Services</p>
          <p className="mb-4">Support</p>
          <p className="mb-4">Contact Us</p>
          <p className="mb-4">Help & FAQ</p>
          <Divider className="my-6" orientation="horizontal" color="gray.100" />
          <div className="w-full px-10">
            <button className="p-3 rounded-md bg-maingreen text-xs text-white font-Poppins-Medium shadow w-full">Get The App</button>
          </div>
        </div>

          </DrawerContent>
        </Drawer>
    </div>
  )
}

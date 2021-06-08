import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="w-full h-auto bg-footercolor xl:px-20 lg:px-20 md:px-10 sm:px-10 py-8 flex flex-col">

        <div className="flex-1 w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">

          <div className="mb-8 xl:text-left lg:text-left md:text-left sm:text-left">
            <h1 className="font-Poppins-Medium text-white">Company</h1>
            <div className="mt-4 flex flex-col justify-around h-40 text-xs text-gray-400 cursor-pointer">
              <p className="">About Us</p>
              <p className="">Blog</p>
              <p className="">Products</p>
              <p className="">Services</p>
              <p className="">Contact us</p>
            </div>
          </div>

          <div className="mb-8 xl:text-left lg:text-left md:text-left sm:text-left">
            <h1 className="font-Poppins-Medium text-white">Support</h1>
            <div className="mt-4 flex flex-col justify-around h-40 text-xs text-gray-400 cursor-pointer ">
              <p className="">Help Center</p>
              <p className="">Safety Center</p>
              <p className="">Community Guidelines</p>
            </div>
          </div>

          <div className="mb-8 xl:text-left lg:text-left md:text-left sm:text-left">
            <h1 className="font-Poppins-Medium text-white">Legal</h1>
            <div className="mt-4 flex flex-col justify-around h-40 text-xs text-gray-400 cursor-pointer ">
              <p className="">Cookies Policies</p>
              <p className="">Privacy Policy</p>
              <p className="">Terms of Services</p>
              <p className="">Law Enforcement</p>
            </div>
          </div>

          <div className="mb-8 xl:text-left lg:text-left md:text-left sm:text-left">
            <h1 className="font-Poppins-Medium text-white">Get the App</h1>
            <div className="mt-4 flex flex-col justify-around h-40">
              <div className="w-40 h-16">
                <img src="/images/gplay.png" alt="googleplay" className="w-full h-full" />
              </div>
              <div className="w-40 h-16">
                <img src="/images/apple.png" alt="googleplay" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center xl:flex-row lg:flex-row sm:flex-col-reverse md:flex-col-reverse">
          <p className="text-white font-Poppins-Medium text-xs" >© 2020 Midlman. All right reserved.</p>
          <div className="w-40 h-12 flex justify-between items-center">
              <FaFacebookF size={20} color="white" className="cursor-pointer" />
              <FaTwitter size={20} color="white" className="cursor-pointer" />
              <FaInstagram size={20} color="white" className="cursor-pointer" />
          </div>
        </div>

    </div>
  )
}

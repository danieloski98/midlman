import React from 'react'
import Image from 'next/image'

export default function RecentPost() {
  return (
    <div className="xl:px-20 lg:px-12 md:px-4 sm:px-4  mt-12 w-full xl:h-400px lg:h-400px md:h-11/12 sm:h-11/12 mb-12">

        <div className="w-full h-full rounded-md shadow-lg bg-white flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:p-6 lg:p-6 md:p-2 sm:p-2 md:items-center sm:items-center">

          <div className="xl:w-1/3 lg:w-1/3 md:w-11/12 sm:w-11/12 md:h-80 sm:h-80 bg-gray-300 xl:h-11/12 lg:h-11/12 rounded-lg md:mt-4 sm:mt-4 xl:mt-0 lg:mt-0">
            <img src="/images/doctorimg.png" alt="" className="w-full h-full" />
          </div>

          <div className="xl:ml-10 lg:ml-10 md:ml-4 sm:ml-4 md:mr-4 sm:mr-4  flex flex-col justify-between xl:w-3/5 lg:w-3/5 md:w-full sm:full">

            <div className="w-full h-56 overflow-hidden sm:pt-6 md:pt-6">
              <h2 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl xl:text-left lg:text-left  md:text-center sm:text-center font-Poppins-Medium">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19</h2>

              <p className="text-sm text-gray-500 font-Poppins-Regular mt-5 xl:text-justify lg:text-justify md:text-justify sm:text-justify leading-7">
                Midl Man a Pharmaceutical distribution company in the health technology sector which connects suppliers to buyers of quality healthcare needs at the best prices and at the fastest possible time. Midl Man a Pharmaceutical distribution company in the health technology sector which connects suppliers to buyers of quality healthcare needs at the best prices and at the fastest possible time.
                healthcare needs at the best prices and at the fastest possible time. Midl Man a Pharmaceutical distribution company in the health technology sector which connects suppliers to buyers of quality healthcare needs at the best prices and at the fastest possible time.

                healthcare needs at the best prices and at the fastest possible time. Midl Man a Pharmaceutical distribution company in the health technology sector which connects suppliers to buyers of quality healthcare needs at the best prices and at the fastest possible time.


              </p>
            </div>

            <div className="w-full flex justify-between sm:mt-8 md:mt-8 xl:pb-0 lg:pb-0 md:pb-12 sm:pb-12">
              <p className="font-Poppins-Medium text-gray-600 text-sm">21st June, 2021</p>
              <p className="font-Poppins-Medium text-maingreen text-sm">Read More</p>
            </div>

          </div>

        </div>

    </div>
  )
}

import React from 'react'

export default function ArticleCard() {
  return (
    <div className="xl:w-80 lg:w-80 xl:h-96 lg:h-96 xl:border-2 xl:border-gray-400 rounded-lg lg:border-2 lg:rounded-lg xl:p-4 lg:p-6 mb-10 sm:w-full md:w-full sm:h-96 md:h-96 sm:border-2 md:border-2 sm:border-gray-200 md:border-gray-200 sm:p-4">
      <div className="w-full h-1/2">
        <img src="/images/doctorimg.png" alt="banner image" className="w-full h-full" />
      </div>

      <div className="w-full h-32 overflow-hidden">
        <h2 className="font-Poppins-Bold text-md mt-2">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19</h2>
        <p className="text-sm font-Poppins-Medium text-gray-500 mt-1">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19....</p>
      </div>

      <div className="mt-4">
        <button className="p-2 rounded-md bg-maingreen text-xs text-white">Read More</button>
      </div>
    </div>
  )
}

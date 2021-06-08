import React from 'react'
import Link from 'next/link'

export default function ArticleCard() {
  return (
    <Link href="/article/9009">

      <div className="xl:w-80 lg:w-80 xl:h-auto lg:h-auto xl:border-2 xl:border-gray-100 rounded-lg lg:border-2 lg:rounded-lg xl:p-4 lg:p-6 mb-10 sm:w-full md:w-full sm:h-auto md:h-auto sm:border-2 md:border-2 sm:border-gray-200 md:border-gray-200 sm:p-4 flex flex-col cursor-pointer">

            <div className="w-full h-1/2">
              <img src="/images/doctorimg.png" alt="banner image" className="w-full h-full" />
            </div>

            <div className="w-full h-32 overflow-hidden flex-1">
              <h2 className="font-Poppins-Bold text-md mt-6">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19</h2>
              <p className="text-sm font-Poppins-Medium text-gray-500 mt-6">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19....</p>
            </div>

        <div className="mt-4 ">
          <button className="p-2 rounded-md bg-maingreen text-xs text-white">Read More</button>
        </div>
      </div>

    </Link>
  )
}

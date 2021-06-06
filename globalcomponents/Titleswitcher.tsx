import React from 'react'

export default function Titleswitcher() {
  return (
    <div className="w-full flex flex-col xl:px-20 lg:px-20 md:px-12 sm:px-12">
        <div>
          <h1 className="text-3xl font-Poppins-Bold text-gray-600 sm:text-center md:text-center lg:text-left xl:text-left">Blog Title & Article</h1>
        </div>
        <div className="mt-4 flex xl:w-2/5 lg:w-2/12 md:w-full sm:w-full h-10 xl:justify-start lg:justify-start md:justify-center sm:justify-center">
          <div className="w-2/12 h-full bg-maingreen text-white text-xs rounded-md flex justify-center items-center">Blog</div>
          <div className="w-2/12 h-full border-2 border-maingreen rounded-md ml-3 flex justify-center items-center text-maingreen text-sm font-Poppins-Medium cursor-pointer hover:bg-gray-200 hover:border-transparent">
            Blog
          </div>
          <div className="w-2/12 h-full border-2 border-maingreen rounded-md ml-3 flex justify-center items-center text-maingreen text-sm font-Poppins-Medium cursor-pointer hover:bg-gray-200 hover:border-transparent">
            Blog
          </div>
          <div className="w-2/12 h-full border-2 border-maingreen rounded-md ml-3 flex justify-center items-center text-maingreen text-sm font-Poppins-Medium cursor-pointer hover:bg-gray-200 hover:border-transparent">
            Blog
          </div>
          <div className="w-2/12 h-full border-2 border-maingreen rounded-md ml-3 flex justify-center items-center text-maingreen text-sm font-Poppins-Medium cursor-pointer hover:bg-gray-200 hover:border-transparent">
            Blog
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import ArticleCard from './ArticleCard'
import {  FiChevronLeft, FiChevronRight} from 'react-icons/fi'

export default function ArticlesContainer() {
  return (

    <div className="w-full mt-32 xl:px-20 lg:px-20 md:px-4 sm:px-4 xl:mb-12">

      <h2 className="text-2xl font-Poppins-Bold">All Articles</h2>

      <div className="flex w-full xl:flex-wrap lg:flex-wrap mt-10 xl:justify-between lg:justify-between xl:flex-row lg:flex-row md:flex-col sm:flex-col">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <div className="xl:w-80 xl:h-14 lg:w-80 lg:h-14 sm:w-full md:w-full sm:h-14 md:h-14 xl:justify-start lg:justify-start sm:justify-center md:justify-center mt-6 flex mb-6">
        <div className="w-14 h-full border-2 border-gray-300 rounded-md flex justify-center items-center cursor-pointer">
            <FiChevronLeft color="lightgrey" size={30} />
        </div>

        <div className="w-14 h-full flex justify-center items-center text-maingreen font-Poppins-Medium">
            1
        </div>

        <div className="w-14 h-full flex justify-center items-center font-Poppins-Medium">
            2
        </div>

        <div className="w-14 h-full flex justify-center items-center font-Poppins-Medium">
            3
        </div>

        <div className="w-14 h-full border-2 border-gray-300 rounded-md flex justify-center items-center cursor-pointer">
            <FiChevronRight color="lightgrey" size={30} />
        </div>
      </div>

    </div>

  )
}

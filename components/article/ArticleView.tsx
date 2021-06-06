import React from 'react'
import Image from 'next/image'
import ArticleCard from '../Homepage/ArticleCard'

export default function ArticleView() {
  return (
    <div className="xl:px-20 lg:px-20 sm:px-6 md:px-6 xl:mt-24 lg:mt-24 sm:mt-12 md:mt-12">
      <h1 className="font-Poppins-Bold xl:text-3xl lg:text-3xl sm:text-lg md:text-lg text-center">Accelerating the Pace of Oncology Clinical Trials in the Wake of COVID-19</h1>
      <p className="text-xs text-center text-gray-400 mt-6">24th June, 2020</p>

      <div className="mt-6 w-full h-64 bg-gray-400  rounded-lg mb-8">
        <img src="/images/doc2.png" className="w-full h-full object-fill" />
      </div>

      <div className="w-full flex justify-center xl:px-32 mt-20 flex-col">

        <p className="text-sm text-gray-500 font-Poppins-Regular leading-7 text-justify">
        The problems listed above
        can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death. The problems listed above can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death.

        The problems listed above
        can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death.
        The problems listed above
        can be said to be inter-linked because public health issues like malaria
        </p>

        <div className="w-full h-64 bg-gray-400  rounded-lg mb-8 mt-20">
          <img src="/images/doc2.png" className="w-full h-full object-fill" />
        </div>

        <p className="text-sm text-gray-500 font-Poppins-Regular mt-10 leading-7 text-justify">
        The problems listed above
        can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death. The problems listed above can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death.

        The problems listed above
        can be said to be inter-linked because public health issues like malaria  (which records about 300,000 deaths a year in Nigeria) is linked to a
        pharmaceutical market prooblem of poor distribution channels to get these quality afffordable medicines and medical devices to the socio-economic
        class who face the problem of not being able to afford foreign brands and
        hence are forced to go for counterfeit medicines which can lead to death.
        The problems listed above
        can be said to be inter-linked because public health issues like malaria
        </p>

      </div>

      <div className="flex-col flex w-full xl:px-20 lg:px-20 md:px-0 sm:px-0 mt-24 mb-40">
        <h1 className="font-Poppins-Bold xl:text-3xl lg:text-3xl sm:text-lg md:text-lg text-left">Read More from our Latest Articles</h1>

        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col w-full xl:justify-between lg:justify-between sm: justify-start md:justify-start mt-20">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>

      </div>

    </div>
  )
}

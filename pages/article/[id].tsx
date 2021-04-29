import React from 'react'
import ArticleView from '../../components/article/ArticleView'
import Footer from '../../globalcomponents/Footer'
import Navbar from '../../globalcomponents/Navbar'
import Searchbar from '../../globalcomponents/Searchbar'

export default function Article() {
  return (
    <div>
     <Navbar />

     <div className="sm:pt-24 md:pt-24 xl:pt-32 lg:pt-32">
       <Searchbar />
       <ArticleView />
       <Footer />
     </div>
    </div>
  )
}

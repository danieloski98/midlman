import Head from 'next/head'
import { Button } from '@chakra-ui/react'

// components
import Navbar from '../globalcomponents/Navbar'
import Searchbar from '../globalcomponents/Searchbar'
import Titleswitcher from '../globalcomponents/Titleswitcher'
import RecentPost from '../components/Homepage/RecentPost'
import ArticlesContainer from '../components/Homepage/ArticlesContainer'
import Footer from '../globalcomponents/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MidlMan | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="pt-24 flex-1">
        <Searchbar />
        <Titleswitcher />
        <RecentPost />
        <ArticlesContainer />
        <Footer />
      </div>

    </div>
  )
}

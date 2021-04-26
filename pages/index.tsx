import Head from 'next/head'
import { Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-64 bg-green-400 p-5">
        <Button>Click me</Button>
      </div>
    </div>
  )
}

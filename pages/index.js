import Head from 'next/head'
import Navbar from 'components/navbar/navbar'
import Body from 'components/body/body'


export default function Home() {
  return (
  <>
  <Head>
    <title>OMDb Movie Search</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" description="Search Movies in Movie Database" />
  </Head>
  <Navbar/>  
  <Body/>
  </>
  )
}

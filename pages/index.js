import Head from 'next/head'
import Navbar from 'components/navbar/navbar'
import Body from 'components/body/body'


export default function Home() {
  return (
  <>
  <Head>
    <title>OMDb Movie Search</title>
    <meta name="description" content="Search Movie Database; Capital One omdbAPI challenge"/>
  </Head>
  <Navbar/>  
  <Body/>
  </>
  )
}

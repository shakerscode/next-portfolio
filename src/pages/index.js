import Head from 'next/head' 
import About from './home/about'
import Contact from './home/contact'
import Footer from './home/footer'
import Hero from './home/hero'
import Navbar from './home/navbar'
import Portfolio from './home/portfolio'
import Review from './home/review'
import Service from './home/service'

 
export default function Home() {
  return (
    <>
      <Head>
        <title>Next Portfolio by Shaker Ahamed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
         <Navbar/>
         <Hero/>
         <About/>
         {/* <Service/> */}
         {/* <Portfolio/> */}
         {/* <Review/> */}
         {/* <Contact/> */}
         {/* <Footer/> */}
       </main>
    </>
  )
}

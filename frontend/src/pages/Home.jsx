
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import KeyFeatures from '../components/KeyFeatures'
import Testimonials from '../components/Testimonials'

function Home() {

  

  return (
   <div className='flex flex-col min-h-screen'>
    <header>
       <Navbar></Navbar>
    </header>

    <main className='flex-1'>
      <HeroSection></HeroSection>
      <KeyFeatures></KeyFeatures>
      <Testimonials></Testimonials>

    </main>


    <footer>
      <Footer></Footer>
    </footer>
   </div>
  )
}

export default Home

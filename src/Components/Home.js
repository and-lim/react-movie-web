import React from 'react'
import { useNavigate } from 'react-router-dom'
import duneImage from '../assets/dune.jpg'
import wickImage from '../assets/wick.jpg'
import avatarImage from '../assets/avatar.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Typed from 'typed.js';

const Home = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Watch Movie.', 'See Movie'],
        typeSpeed: 100,
        backSpeed : 100,
        loop:true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


const navigate = useNavigate();
  return (
    <>

    <Navbar/>
    
    <section className="intro relative min-h-screen py-32 text-center">
      <div className='absolute top-0 left-0 h-full w-full px-8 flex flex-col items-center justify-center' style={{ backgroundColor: 'rgba(1, 4, 3, 0.5)' }}>
         <div className="container flex flex-col justify-center items-center mx-auto">
            <h1 className='text-6xl text-white mb-16 title fw-600'>
                <span className='text-8xl'>
                 Movie Website
                </span>
            <br/>
            <br />
             <span className='text-6xl text-lime-400' ref={el} />
            </h1>
            <button type="button" onClick={() => navigate('/movie')} class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                See Movie List</button>
          </div>
      </div>
    </section>

    {/* <section className='pb-12 bg-white pt-12'>
        <h1 className='text-black-600 text-center mb-10 font-bold underline underline-offset-2 text-5xl'>Trending</h1>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-9 containers mx-auto">
     

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg">
                <img class="rounded-t-lg w-full h-auto" src={wickImage} alt="" />
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-dark-900 ">Movie Name</h5>
                    </a>
                    <p class="mb-3 font-normal text-dark">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    
                    <div class="pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                    </div>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                
                </div>
            </div>

         
            
        </div>
        
    </section> */}

    {/* <Footer/> */}

    </>
  )
}

export default Home
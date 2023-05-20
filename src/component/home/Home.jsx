import React from 'react';
import './Home.css';
import data from '../../data.json';

const Home = () => {
  return (
    <main className='background'>
      <div className='w-full h-3/5 flex sm:flex-col md:flex-row justify-between align-middle absolute left-0 bottom-0 lg:container md:container'>
        <div className=' w-1/3 h-full flex flex-col text-white ml-20 align-baseline'>
            <h1 className='text-5xl main-headline my-4'>  So, you want to travel to <span className='block uppercase font-medium tracking-widest text-9xl '>Space</span></h1>
            <p className='text-lg mt-3'>  Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='w-1/2 flex justify-center align-center'>
          <div className='flex justify-center items-center w-52 h-52 rounded-full bg-white cursor-pointer hover:shadow-lg'>
            <a href="#" className='text-3xl '>Explore</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
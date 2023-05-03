import React from 'react';
import avi from '../assets/avi.png'

// home component
const Home = () => {
  return (
    <div name='home' className='w-full bg-[grey]'>

      <div className='max-w-[1000px] mx-auto px-8 py-40 flex flex-col justify-center h-full'>
      <p className='text-[black] py-4 mx-auto text-2xl max-w-[500px]'>
          Hi, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[black]'>
          John Doe
        </h1>
        <div>
        <img className=' h-[400px] object-contain m-auto p-8' src={avi} alt='img'  />
                  <p className='my-auto'>Me</p>
              </div>
        <h2 className='text-4xl sm:text-4xl font-bold text-[black]'>
          I'm a Front-end Web Developer.
        </h2>
  
        <div>
        <a href="https://craftmycv.com/resume/john-doe">
          <button className='text-white border-2 rounded px-6 py-3 my-2 mx-auto flex items-center hover:bg-teal-600 hover:border-[teal] hover:text-black'>
            Download Resume
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
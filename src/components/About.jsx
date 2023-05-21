import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[grey] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className=' m-auto pb-9'>
            <p className='text-4xl font-bold inline border-b-4 border-teal-600'>
              About
            </p>
          </div>
          </div>

          <div className='max-w-[600px] w-full grid text-2xl gap-4 px-4'>
            <div>
              <p>I am a student at the University of Northwestern coding bootcamp. I have worked on many different types of projects from basic html to full stack web applications.
               </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
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
              <p>I am a front-end web developer that currently
                resides in Torquay, Devon,UK.
                 I have developed many projects of frontend mainly using javascript and it's frameworks.
                I have also developed a few projects using PHP and Laravel.
                The major applications are DJ applications to E-commerce platforms.
               </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
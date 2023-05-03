import React from 'react';

import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';

// footer component
const Social = () => {
return (
<div name='social' className=' bg-grey text-black-300'>
 
      <div className='max-w-[1000px] mx-auto py-20 flex flex-col justify-center'>
          <div>
              <p className='text-3xl font-bold inline border-b-3 border-teal-600 '>Social Media</p>   
          </div>

          <div className='grid grid-cols-3 sm:grid-cols-3 gap-20 items-center m-auto'>
              <div className='hover:scale-110 duration-500  '>
              <a
              className='min-w-[30px] flex justify-between items-center  text-gray-300'
              href='http://www.github.com/johnDoe' > {/* link to github account*/}
              <FaGithub size={70} />
              <p>Github account</p>
            </a>
              </div>
              
              <div className='hover:scale-110 duration-500 '>
              <a
              className='min-w-[30px] flex justify-between items-center  text-gray-300'
              href='https://www.linkedin.com/in/johnDoe/'> {/* link to linkedin account*/}
            
              <FaLinkedin size={70} />
              <p>Linkedin account</p>

            </a>
              </div>

              <div className='hover:scale-110 duration-500'>
              <a
              className='min-w-[30px] flex justify-between items-center text-gray-300'
              href='mailto:johnDoe@gmail.com'> {/* link to gmail account*/}
            
              <HiOutlineMail size={70} />
              <p>Gmail account</p>

            </a>
              </div> 
          </div>
      </div>
    </div>
);
}

export default Social;
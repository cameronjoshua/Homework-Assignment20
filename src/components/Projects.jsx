import React from "react";

import movies2 from "../assets/movies2.png";


import {
  FaGithub,
} from 'react-icons/fa';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-black-300 bg-grey">

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-20 text-black-600 border-teal-600">
            Projects
          </p>
          
        </div>
        

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-7 pb-20">

          


          {/* Movie Watchlist */}
          <div
            style={{ backgroundImage: `url(${movies2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Watchlist
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Jeptooleonida/Movie-watchlist"> {/*link to hosted project*/}
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/Jeptooleonida/Movie-watchlist'>   {/*source code link*/}

              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${movies2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Watchlist
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Jeptooleonida/Movie-watchlist"> {/*link to hosted project*/}
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/Jeptooleonida/Movie-watchlist'>   {/*source code link*/}

              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>
          


          <div
            style={{ backgroundImage: `url(${movies2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Watchlist
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Jeptooleonida/Movie-watchlist"> {/*link to hosted project*/}
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/Jeptooleonida/Movie-watchlist'>   {/*source code link*/}

              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>



          <div
            style={{ backgroundImage: `url(${movies2})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Movie Watchlist
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Jeptooleonida/Movie-watchlist"> {/*link to hosted project*/}
                <button className="text-center rounded-lg flex flex-col px-5 py-3 m-auto bg-white text-gray-800 font-bold text-lg">
                    Live
                  </button>
                </a>
                <div className='hover:scale-110 duration-500'>
              <a
              className='flex flex-col py-5 justify-between items-center  text-gray-100'
              href='https://github.com/Jeptooleonida/Movie-watchlist'>   {/*source code link*/}

              <FaGithub size={50} />
            </a>
              </div> 
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
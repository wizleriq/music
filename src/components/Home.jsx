import React from 'react'
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
// import Picture from '../pictures/Picture.jpeg'
import Musicguy from '../img/Musicguy.jpg'
import Music3 from "../img/Music3.jpeg"
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { faList } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Musicgirl from '../img/musicgirl.jpeg'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Sidebar from './sidebar/Sidebar'

const Home = () => {
  return (
    <div className='home'>
      <div className='flex justify-between mt-3 mb-1'>
      <div className='home-container text-gray-700  border-green-900 rounded-md w-9 h-7 hover:bg-custom-color  mt-2 pt-0 pb-1 text-center '>
      <FontAwesomeIcon icon={faLessThan} /></div>

      <div className='relative w-auto h-auto border border-none ml-96 '>
      <div className='pt-1 pb-1 rounded-sm '>
        <input type="text" placeholder='search for song'  className='pl-2 pr-2 bg-search-color text-gray-500 rounded-md  focus:outline-none' />
      </div>
      <div className='text-gray-500  absolute top-1 right-2'><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
      </div> 
      
      <div className='flex '>
        <div className='relative '>
        <div className='text-text-color pr-6  text-lg fon '><FontAwesomeIcon icon={faBell} className='w-6 h-5 mt-2'/></div>
        <div className='absolute text-white bg-red-700 rounded-full p-1 pb-0 text-xs pt-0 -top-0.5  top left-3 w-auto object-cover'><li className='list-none '>1</li></div>
        </div>
      
      <div className='w-11 h-12 object-cover pr-5 rounded-full'><img src={Musicguy} alt="" className='rounded-full lg:'/></div>
      </div>
    </div> 
    <section className='relative'>
    <div className='ml-1  w-full h-96'> <img src={Music3} alt="" className='w-full h-full object-fill' /></div>
    <div className='absolute top-10 left-6 ml-5 text-white'>
      <h1 className='text text-lg font-bold'>Chris Brown</h1>
    <p className='text-xs font-thin'>4.3M Monthly Listeners</p>
      <div>
      <button className='border-none bg-custom-color pl-8 pr-8 pt-2 pb-2 mt-4 rounded-md text-sm  hover:translate-x-1'>Follow</button>
      </div>
    </div>
    <div className='w-0 justify-between align-middle text-center'>
    <div><FontAwesomeIcon icon={faPlay} className='absolute top-72 text-white ml-5 bg-custom-color p-4 rounded-full left-3' />
    <FontAwesomeIcon icon={faRepeat} className='bg-white absolute top-72 left-24 text-grey-500 p-2 mt-2 -ml-3 rounded-full '/>

    <FontAwesomeIcon icon={faArrowUpFromBracket}className='absolute  top-72 text-grey-500 bg-white p-2 mt-2 -ml-1 gap-x-10 justify-center rounded-full left-32 '/>
    <div className='w-11 h-12 object-contain pr-5 rounded-full absolute top-72 right-24'><img src={Musicguy} alt="" className='rounded-full'/></div>
    <div className='absolute top-72 -right-0 mr-5 mt-1 text-white text-xs font-medium'><h3>54k followers</h3></div>
    </div>
  
    </div>
    </section>

    <section className='ml-1 w-full h-full'>
      <div className='justify-between flex ml-0 p-4  '>
        <h2># Title</h2>
        <div className='text-center text-gray-500 mr-36 '>
         <FontAwesomeIcon icon={faMusic} className='mr-64' />
        <FontAwesomeIcon icon={faEye}  className=' mr-60 -ml-20' />
        <FontAwesomeIcon icon={faClock}  className=' mr-52 -ml-20'/>
        </div>
</div>
<div className='flex mr-4'>
  <div><FontAwesomeIcon icon={faPlay} className='border-green-950 text-gray-500 rounded-full ml-5  mr-4 p-4 items-center mt-1' /></div>
  <div className='flex border w-full bg-white rounded-md hover:bg-custom-color  text-gray-500 hover:text-white '>
    <img src={Musicgirl} alt="" className='w-14 h-14 object-cover' />
    <div className='flex justify-between pt-2 pb-2 items-center'>
    <div className='ml-12'>
    <h2 className='font-medium'>Unavailable</h2>
    <p className='text-xs'>Davido</p>
    </div>
    <div className='ml-60 text-sm flex items-center'>
      <h2>DMW World Wide</h2>
      <h4 className='ml-32'>54k</h4>
      <h4 className='ml-36'>04:21</h4>
      <div className='items-center w-auto ml-3'>
      <FontAwesomeIcon icon={faRepeat} className='ml-10 border rounded-full p-1' />
    <FontAwesomeIcon icon={faArrowUpFromBracket} className='ml-9 border rounded-full p-1' />
    <FontAwesomeIcon icon={faEllipsisVertical}  className='ml-10 mb-1'/>
      </div>
    </div>

    </div>
   
  </div>
  
</div>
<div className='flex mr-4 mt-4 mb-4 items-center'>
  <div><FontAwesomeIcon icon={faPlay} className='border-green-950 text-gray-500 rounded-full ml-5  mr-4 p-4 items-center mt-1' /></div>
  <div className='flex border w-full  rounded-md hover:bg-custom-color  text-gray-500 hover:text-white '>
    <img src={Musicgirl} alt="" className='w-14 h-14 object-cover' />
    <div className='flex justify-between pt-2 pb-2 items-center'>
    <div className='ml-12'>
    <h2 className='font-medium'>Bad To Me</h2>
    <p className='text-xs'>Wizkid</p>
    </div>
    <div className='ml-64 text-sm flex items-center'>
      <h2>Starboy Records</h2>
      <h4 className='ml-32'>54k</h4>
      <h4 className='ml-36'>04:21</h4>
      <div className='items-center w-auto ml-3'>
      <FontAwesomeIcon icon={faRepeat} className='ml-10 border rounded-full p-1' />
    <FontAwesomeIcon icon={faArrowUpFromBracket} className='ml-9 border rounded-full p-1' />
    <FontAwesomeIcon icon={faEllipsisVertical}  className='ml-10 mb-1'/>
      </div>
    </div>

    </div>
   
  </div>
  
</div>
<div className='flex mr-4 mt-4 mb-4'>
  <div><FontAwesomeIcon icon={faPlay} className='border-green-950 text-gray-500 rounded-full ml-5  mr-4 p-4 items-center mt-1' /></div>
  <div className='flex border w-full bg-white rounded-md hover:bg-custom-color  text-gray-500 hover:text-white '>
    <img src={Musicgirl} alt="" className='w-14 h-14 object-cover' />
    <div className='flex justify-between pt-2 pb-2 items-center'>
    <div className='ml-12'>
    <h2 className='font-medium'>Unavailable</h2>
    <p className='text-xs'>Davido</p>
    </div>
    <div className='ml-60 text-sm flex items-center'>
      <h2>DMW World Wide</h2>
      <h4 className='ml-32'>54k</h4>
      <h4 className='ml-36'>04:21</h4>
      <div className='items-center w-auto ml-3'>
      <FontAwesomeIcon icon={faRepeat} className='ml-10 border rounded-full p-1' />
    <FontAwesomeIcon icon={faArrowUpFromBracket} className='ml-9 border rounded-full p-1' />
    <FontAwesomeIcon icon={faEllipsisVertical}  className='ml-10 mb-1'/>
      </div>
    </div>

    </div>
   
  </div>
  
</div>
<div className='flex mr-4  mt-4 mb-4'>
  <div><FontAwesomeIcon icon={faPlay} className='border-green-950 text-gray-500 rounded-full ml-5  mr-4 p-4 items-center mt-1' /></div>
  <div className='flex border w-full rounded-md hover:bg-custom-color  text-gray-500 hover:text-white '>
    <img src={Musicgirl} alt="" className='w-14 h-14 object-cover' />
    <div className='flex justify-between pt-2 pb-2 items-center'>
    <div className='ml-12'>
    <h2 className='font-medium'>Unavailable</h2>
    <p className='text-xs'>Davido</p>
    </div>
    <div className='ml-60 text-sm flex items-center'>
      <h2>DMW World Wide</h2>
      <h4 className='ml-32'>54k</h4>
      <h4 className='ml-36'>04:21</h4>
      <div className='items-center w-auto ml-3'>
      <FontAwesomeIcon icon={faRepeat} className='ml-10 border rounded-full p-1' />
    <FontAwesomeIcon icon={faArrowUpFromBracket} className='ml-9 border rounded-full p-1' />
    <FontAwesomeIcon icon={faEllipsisVertical}  className='ml-10 mb-1'/>
      </div>
    </div>

    </div>
   
  </div>
  
</div>
    </section>
   
    

      </div>
      
  )
}

export default Home;

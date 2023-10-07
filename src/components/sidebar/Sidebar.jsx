import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
     <div className='text-black justify-center ml-6 text-sm  lg:block hidden'>
      <div className='justify-center text-center mt-4 mb-2'>
        <span className='mr-7'>Ndata</span>
      </div>
      <div >
        <button className='mb-8 bg-custom-color rounded-md p-2 pl-3 pr-5 justify-center text-center'> <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' icon={faArrowLeft} />Web App</button>
        <ul className='text-black mb-12'> {/* Replace 'blue' with your desired color */}
          <li className='mb-3'>
          <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' icon={faHome} />Home</li>
          <li className='mb-3'>
          <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' />Browse</li>
          <li className='mb-3'>
          <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' />Artist</li>
          <li className='mb-3'>
          <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' />Songs</li>
          <li className='mb-3'>
          <FontAwesomeIcon className='mr-2 cursor-pointer text-xs' />Album</li>
        </ul>
        <hr className='w-28' />

        <ul className='mt-5 mb-12'>
        <li className='mb-3'>
             <FontAwesomeIcon className='mr-2' icon={faBars}/>Recently Played</li>
          <li className='mb-3'>Favourite</li>
          <li className='mb-3'>Saved Music</li>
          <li className='mb-3'>Subscription</li>
        </ul>
        <hr className='w-28' />

        <ul className='mt-5 mb-12'>
        <li className='mb-3'>Settings</li>
        <li className='mb-3'>Log Out</li>
        </ul>
        </div>
      <div>
      </div>
    </div>
  );
};

export default Sidebar;

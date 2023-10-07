import React from 'react';
import './footer.css';
import Drake2 from '../footer/Footerimg/Drake2.jpg';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='border bg-search-color w-full p-3 flex items-center' style={{ position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: '100' }}>
      <div>
        <img src={Drake2} alt="" className='w-14 h-14 object-cover rounded-md' />
      </div>
      <div className='pl-4'>
        <h1 className='font-medium text-base'>In My Feelings</h1>
        <p className='text-gray-500 text-sm'>Drake</p>
      </div>
      <div className='pl-12 text-gray-500 items-center'>
        <FontAwesomeIcon icon={faBackward} className='ml-0 mb-2' />
        <FontAwesomeIcon icon={faPlay} className='ml-4 border p-2 rounded-full items-center justify-center' />
        <FontAwesomeIcon icon={faForward} className='ml-4 mb-2' />
      </div>
      <p className='ml-8 text-sm'>4:01</p>
      <div className=' items-center ml-4 h-1 w-3/5 rounded-full bg-gray-300'>
        <div className='h-1 rounded-full bg-custom-color' style={{width: '76%'}}></div>
      </div>
      <p className='ml-5 text-sm'>4:54</p>
      <div className='item items-center '>
      <FontAwesomeIcon icon={faVolumeHigh} className='ml-8'/>
      <FontAwesomeIcon icon={faHeart} className='ml-4'/>
      <FontAwesomeIcon icon={faRepeat} className='ml- ml-5' />
      </div>
   
    </div>
  );
}

export default Footer;

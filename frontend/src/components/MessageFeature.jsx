import React from 'react'
import { IoShareSocial } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import { FaDisease } from "react-icons/fa6";

const MessageFeature = () => {
  return (
    <div className='bg-white'>
      <div className='pt-12'>
        <h1 className='flex justify-center text-2xl font-bold
         text-gray-800'>Messaging for all</h1>
        <p className='mt-3 flex text-sm text-gray-600 justify-center'>User generated content in real-time will have multiple
          touchpoints for offshoring.
        </p>
      </div>
      <div className='pt-16 px-24 md:flex '>
        <div className='w-[375px] h-[182px] mr-9 mb-7'>
          <p><FaDisease className='text-white bg-blue-600
           rounded-full text-[35px] p-1'/></p>
          <h2 className='font-semibold text-[22px] my-2'>Easier Work Organization</h2>
          <p className='text-gray-600 text-[16px]'>Efficiently unleash cross-media information without 
            cross-media value. Quickly timely deliverable for real-time schemas.

          </p>
        </div>
        <div className='w-[375px] h-[182px] mr-9 mb-7 bg-gray-10'>
          <p><FaStarOfLife className='text-white bg-blue-600
           rounded-full text-[35px] p-1'/></p>
          <h2 className='font-semibold text-[22px] my-2'>Fast Connection</h2>
          <p className='text-gray-600 text-[16px]'>Efficiently unleash cross-media information without 
            cross-media value. Quickly timely deliverable for real-time schemas.

          </p>
        </div>
        <div className='w-[375px] h-[182px]'>
          <p><IoShareSocial className='text-white bg-blue-600
           rounded-full text-[35px] p-1'/></p>
          <h2 className='font-semibold text-[22px] my-2'>Streamlined Processes</h2>
          <p className='text-gray-600 text-[16px]'>Efficiently unleash cross-media information without 
            cross-media value. Quickly timely deliverable for real-time schemas.

          </p>
        </div>
      </div>
      
    </div>
  )
}

export default MessageFeature

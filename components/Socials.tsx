import { socials } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Socials = () => {
  return (
    <div className='py-20' id='socials'>
         <h1 className='heading'>
               connect with {''}
                <span className='text-purple'> through my socials </span>
            </h1>
        <div className='flex flex-wrap items-center justify-center p-6 gap-x-24 gap-y-8 mt-10'>
          {socials.map((apps) => (
            <Button key={apps.id}>
            <a
              key={apps.id}
              href={apps.url}
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-200'
            >
              <img
                src={apps.img}
                alt={apps.img}
                width={20}
                height={20}
              />
            </a>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Socials
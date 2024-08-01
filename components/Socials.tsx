import { socials } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Socials = () => {
  return (
    <div className='py-20' id='socials'>
      <h1 className='heading'>
        Stay connected through{''}
        <span className='text-purple'> my socials! </span>
      </h1>
      <div className='w-full mt-12 flex lg:flex-cols-4 flex-row gap-10 justify-center items-center' >
        {socials.map((apps) => (
          <Button key={apps.id}>
            <a
              key={apps.id}
              href={apps.url}
              target="_blank"
              rel="noopener noreferrer"
              className=' flex-1 text-white dark:border-slate-800 border-neutral-200'
            >
              <img className='lg:w-32 md:w-20 w-16'
                src={apps.img}
                alt={apps.img}
                width={30}
                height={30}
              />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Socials
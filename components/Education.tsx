import { education } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Education = () => {
    return (
            <div className='py-20' id='Education'>
                <h1 className='heading'>
                   My Education {''}
                    <span className='text-purple'> Foundation for My Career </span>   
                </h1>
                <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 '>
                    {education.map((card)=>(
                        <Button
                        key={card.id}
                        duration={Math.floor(Math.random() * 10000)+10000}
                        borderRadius='1.72rem'
                        className='flex-1 text-white dark:border-slate-800 border-neutral-200'>
                            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
                                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start font-semibold text-white-100 mt-3'> 
                                {card.desc}
                            </p>
                            </div>

                        </Button>
                    ))}
                </div>
            </div>
    )
}

export default Education
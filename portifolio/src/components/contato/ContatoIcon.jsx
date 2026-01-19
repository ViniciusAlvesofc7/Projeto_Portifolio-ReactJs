import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContatoIcon = (props) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <a href={props.link} target='_blank' className=' w-14 h-14 flex justify-center items-center rounded-full bg-gray-800 hover:scale-115 transition-all duration-300'>
                <FontAwesomeIcon icon={props.icon} className='text-cyan-600 text-2xl' />
            </a>
            <span className='text-white '>{props.text}</span>
        </div>
    )
}

export default ContatoIcon

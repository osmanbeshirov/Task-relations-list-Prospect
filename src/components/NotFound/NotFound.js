import React from 'react'

import notFound from '../../assets/icons/not_found.png'

import '../NotFound/notFound.css'

export default function NotFound() {
    return (
        <div className='nof-found-container'>
            <div className='not-found_img'>
                <img src={notFound} />
            </div>
            <div className='not-found_title'>
                <h1>Heç bir istifadəçi daxil olunmayıb...</h1>
            </div>
        </div>
    )
}

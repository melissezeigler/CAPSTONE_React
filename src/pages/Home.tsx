import React from 'react'
import Background from '../assets/images/mccurry_view.jpg'

function Home() {
  return (
    <div 
        style={{ backgroundImage: `url( ${ Background })` }} 
        className='flex flex-grow justify-center mx-auto bg-cover bg-fixed'
        >
            <div className='flex place-items-center h-screen'>
                <p className='p-5 bg-white bg-opacity-80 text-black'>Welcome to the hiking trails compendium. This website allows hikers to upload trail conditions you have done recently so that other hikers can check to see if the trail is in a state that they will find enjoyable. It is also possible to check the weather and get tomorrow's forecast to try and have the best possible hiking experience! If you have recently done a hike, please share your experience!</p>
            </div>
    </div>
  )
}

export default Home
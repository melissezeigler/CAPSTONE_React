import Background from '../assets/images/pathtopeak.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url( ${ Background })` }} className='flex flex-grow justify-center mx-auto bg-cover bg-fixed'>
      <div className='w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='font-bold text-5xl text-white'>
            This website allows hikers to upload trail conditons.
          </h1>
          <p className='text-white text-2xl bg-blue-300 bg-opacity-20'>
          If you have done recently so that other hikers can check to see if the trail is in a state that they will find enjoyable.</p>
          <p className='text-white text-2xl bg-blue-300 bg-opacity-20'>It is also possible to check the weather and get tomorrow's forecast to try and have the best possible hiking experience!</p> 
          <p className='text-white text-2xl bg-blue-300 bg-opacity-20'>If you have recently done a hike, please share your experience!
          </p>
      </div>
    </div>
  )
}
  
export default Home
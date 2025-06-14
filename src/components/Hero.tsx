import profilePic from '../assets/profile-pic-1.jpg'

export default function Hero(){
    return (
    <div className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 max-w-screen-lg mx-auto'>
        <div className='flex-1 flex-col flex justify-center'>
            <h1 className='flex-1 text-center font-dm-sans text-3xl md:text-5xl'>Hi, I'm Kevin</h1>
            <p className='flex-1 text-center font-dm-sans font-light text-xl md:text-2xl'>Software Engineer and Marathon Runner</p>
            <p className='flex-1 text-center font-dm-sans font-light text-xl md:text-2xl'>Solving problems one stride at a time</p>
        </div>

        <div className='flex-1 flex justify-center'>
            <img src={profilePic} alt='Portrait of me.' className='h-64 w-64 md:h-[20rem] md:w-[20rem] object-cover object-[0%_25%] rounded-full'/>
        </div>
    </div>)
}
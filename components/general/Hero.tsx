import Link from "next/link"


const Hero = () => {

    return (
        <div className='min-h-screen w-full flex space-x-24 items-center justify-center pt-32'>
            <img src="/Logos/Dataverse/only_logo_color.svg" className='h-96 w-auto animate__animated animate__rotateIn animate__slower' />
            <div className='flex flex-col space-y-7'>
                <p className='text-8xl animate__animated animate__fadeIn animate__delay-2s font-logo'>Dataverse DAO</p>
                <p className='text-3xl pl-3 animate__animated animate__fadeIn animate__delay-3s'>Fostering adoption of the <span className='font-semibold relative before:content-[""] before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-full before:h-3 before:bg-cyan-300'>data economy</span></p>

                <div className='flex space-x-5 pt-10 pl-3'>
                    <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s border-gray-700 bg-gray-700 text-gray-50 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                        Join community
                    </a>
                    <Link href="#first_section">
                        <a className="rounded-full animate__animated animate__fadeIn animate__delay-3s border border-gray-700 text-gray-700 text-base sm:text-xl max-w-max px-3 sm:px-5 py-2 sm:py-3 cursor-pointer hover:scale-105 transition duration-500 ease-in-out">
                            Learn more
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero

import Link from "next/link";
import { FaLinkedin, FaTelegramPlane, FaDiscord, FaEthereum, FaInstagram, FaTwitter, FaMedium, FaYoutube } from "react-icons/fa";


const Footer = () => {


    return (
        <footer id="contact" className="p-5 sm:p-10 2xl:p-20 mt-44 flex relative flex-col-reverse xl:flex-row justify-between items-center space-x-0 xl:space-x-10">

            <div className="flex flex-col">
                <p className='text-xl'>Let's make <span className='font-semibold relative before:content-[""] before:absolute before:z-[-1] before:left-0 before:bottom-0 before:w-full before:h-2 before:bg-cyan-300'>data mainstream together!</span></p>

                <div className="flex flex-row items-center justify-center flex-wrap space-x-2 sm:space-x-5 pt-5">

                    <a href="https://metagamehub.medium.com" className="cursor-pointer" target="_blank" >
                        <FaMedium className="social-media-icon" />
                    </a>

                    <a href="https://www.instagram.com/metagamehub_dao/" className="cursor-pointer" target="_blank" >
                        <FaInstagram className="social-media-icon" />
                    </a>

                    <a href="https://www.linkedin.com/company/metagamehub-dao/" className="cursor-pointer" target="_blank" >
                        <FaLinkedin className="social-media-icon" />
                    </a>

                    <a href="https://twitter.com/MGH_DAO" className="cursor-pointer" target="_blank" >
                        <FaTwitter className="social-media-icon" />
                    </a>

                    <a href="https://t.me/metagamehub_dao" className="cursor-pointer" target="_blank" >
                        <FaTelegramPlane className="social-media-icon" />
                    </a>

                    <a href="https://discord.gg/8WJVMDXZwH" className="cursor-pointer" target="_blank" >
                        <FaDiscord className="social-media-icon" />
                    </a>
                </div>

            </div>

            <a href="/" className="w-full sm:w-1/2 mb-10 sm:mb-0 max-w-md">
                <img src="/Logos/Dataverse/default.png" className="" />
            </a>


            {/* <div className="absolute bottom-3 right-5 text-gray-400 flex items-center space-x-1">
                <Link href={`/impressum`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Impressum</a>
                </Link>
                <hr className="border-gray-600 w-5 rotate-90" />
                <Link href={`/datenschutz`}>
                    <a className=' hover:text-yellow-400 transition ease-in-out duration-300'>Datenschutz</a>
                </Link>
            </div> */}

        </footer>

    )
}

export default Footer

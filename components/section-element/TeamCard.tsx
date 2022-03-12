import Image from "next/image"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"


const TeamCard = ({ member }: any) => {

    return (

        <div className="group rounded relative shadow-lg w-52 h-52 ml-6">
            <Image
                placeholder='blur'
                blurDataURL={member.image || '/images/Logos/MGH/webp/mgh_logo.webp'}
                src={member.image || '/images/Logos/MGH/webp/mgh_logo.webp'}
                layout="fill"
                loading='lazy'
                objectFit='cover'
                className='rounded grayscale'
            />
            <p className="text-cyan-500 -rotate-90 origin-bottom-left absolute bottom-0.5 min-w-max w-full text-xl">{member.name}</p>
            <div className="flex backdrop-blur rounded-tl bg-white/70 rounded-br justify-center space-x-2 p-1 text-xl absolute bottom-0 right-0 z-10">
                {member.linkedin && (
                    <a href={member.linkedin} className='cursor-pointer' target='_blank'>
                        <BsLinkedin
                            className={'text-cyan-500 hover:text-cyan-400 transition duration-500 ease-in-out'}
                        />
                    </a>
                )}
                {member.twitter && (
                    <a href={member.twitter} className='cursor-pointer' target='_blank'>
                        <BsTwitter
                            className={'text-cyan-500 hover:text-cyan-400'}
                        />
                    </a>
                )}
                {member.github && (
                    <a href={member.github} className='cursor-pointer' target='_blank'>
                        <BsGithub
                            className={'text-cyan-500 hover:text-cyan-400'}
                        />
                    </a>
                )}
            </div>

        </div>

    )
}

export default TeamCard

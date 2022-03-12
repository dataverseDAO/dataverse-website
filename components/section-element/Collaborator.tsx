const Collaborator = ({ link, logo }: any) => {

    return (

        <a href={link} target="_blank" className="h-28 w-full xl:h-32 max-w-[14rem] shadow-lg bg-white border border-gray-100 rounded-lg p-5 hover:scale-105 transition duration-200 ease-linear cursor-pointer">
            <img src={logo} className="object-scale-down w-full h-full" />
        </a>

    )
}

export default Collaborator

const Benefit = ({ title, text, icon }) => {

    return (
        <div className="flex flex-col items-center text-center shadow-lg bg-white border border-gray-100 rounded-lg py-3 px-5 max-w-[22rem] min-w-[22rem]">
            {icon}
            <p className="pt-5 pb-3 text-4xl">{title}</p>
            <p className="text-gray-500">{text}</p>
        </div>
    )
}

export default Benefit

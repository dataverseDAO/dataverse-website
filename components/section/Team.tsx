import teamJson from "../../data/team.json";

import TeamCard from "../section-element/TeamCard";


const Team = () => {

    return (

        <>
            <div id="initiators" className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">


                <h2 className={`self-start relative before:content-[""] before:absolute before:z-[-1] before:left-0 before:bottom-2 before:w-full before:h-6 before:bg-cyan-300`}>Initiators</h2>

                <div className="relative mt-10 w-full flex flex-wrap gap-8 justify-items-center items-center max-w-max">

                    {teamJson.map((member, key) => (
                        <TeamCard key={key} member={member} />
                    ))}

                </div>

            </div></>
    )
}

export default Team

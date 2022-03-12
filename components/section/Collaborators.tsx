import collaboratorJSON from "../../data/collaborators.json"

import Collaborator from "../section-element/Collaborator";


const Collaborators = () => {

    return (

        <div className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <h2 className={`self-start relative before:content-[""] before:absolute before:z-[-1] before:left-0 before:bottom-2 before:w-full before:h-6 before:bg-cyan-300`}>Collaborators</h2>

            <div className="mt-10 w-full flex flex-wrap gap-8 justify-items-center items-center">

                {collaboratorJSON.map((element, key) => {
                    return (
                        <Collaborator key={key} link={element.link} logo={element.logo} />
                    );
                })}
            </div>

        </div>

    )
}

export default Collaborators

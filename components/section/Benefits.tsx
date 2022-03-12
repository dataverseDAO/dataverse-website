import { MdOutlineHowToVote, MdHowToVote } from "react-icons/md";
import {IoRocketOutline} from "react-icons/io5"
import {RiUserStarLine} from "react-icons/ri"

import Benefit from "../section-element/Benefit";
import { BsEye, BsPercent, BsUnlock } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";


const Benefits = () => {

    return (

        <div className="w-full py-10 px-5 sm:px-10 flex flex-col items-center justify-center">

            <h2 className={`self-start relative before:content-[""] before:absolute before:z-[-1] before:left-0 before:bottom-2 before:w-full before:h-6 before:bg-cyan-300`}>Membership Benefits</h2>

            <div className="mt-10 w-full flex flex-wrap gap-8">

                <Benefit title="Voting" text="through Genesis Collection" icon={<MdOutlineHowToVote className="benefit-icon" />} />
                <Benefit title="Incubation" text="for data-related projects" icon={<IoRocketOutline className="benefit-icon" />} />
                <Benefit title="Discounts" text="for products, events, subscriptions, etc." icon={<BsPercent className="benefit-icon" />} />
                <Benefit title="Access" text="to Dataverse Launchpad" icon={<BsUnlock className="benefit-icon" />} />
                <Benefit title="Blueprint" text="and support to monetize data" icon={<HiOutlineSupport className="benefit-icon" />} />
                <Benefit title="Awareness" text="and social media campaigns" icon={<BsEye className="benefit-icon" />} />
                <Benefit title="Exclusive Access" text="Events (conferences, metaverse panels, parties) | VIP Discord Channels" icon={<RiUserStarLine className="benefit-icon" />} />

            </div>

        </div>

    )
}

export default Benefits

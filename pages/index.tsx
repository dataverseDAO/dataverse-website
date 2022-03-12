import type { NextPage } from 'next'
import "animate.css"
import Link from 'next/link';
import Team from '../components/section/Team';
import Hero from '../components/general/Hero';
import Collaborators from '../components/section/Collaborators';
import Benefits from '../components/section/Benefits';
import Product from '../components/section/Product';


const Home: NextPage = () => {

    return (
        <>

            <div className="max-w-screen-2xl flex flex-col space-y-48">

                <Hero />

                <Product />

                <Benefits />

                <Team />

                <Collaborators />

            </div>

        </>
    )
}


export default Home

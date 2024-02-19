import Hero from "../components/Hero"
import Links from "../components/Links"
import Nav from "../components/Nav"
import Logo from "../components/Logo"
import About from '../components/About'
import Showcase from '../components/Showcase'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Datenschutz from "../components/Datenschutz"

const Home = () => {
    return (
        <section className="home-container">
            <Logo />
            <Links />
            <Nav />
            <Hero />
            <About />
            <Showcase />
            <FAQ />
            <Contact />
            <Datenschutz />
        </section>
    )
}

export default Home
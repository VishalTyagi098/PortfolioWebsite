import Navbar from '../Layout/Navbar'
import Socials from '../Layout/Socials'
import Intro from './Intro'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Heading from '../Layout/Heading'
import Contact from '../Contact/Contact'

// This will be the overall layout of homepage
export default function HomepageLayout() {
  return (
    <div>
      <Navbar/>
      <Socials/>
      <Intro/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      {/* <Contact/> */}
    </div>
  )
}

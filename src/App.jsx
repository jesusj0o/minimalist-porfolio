
import { Contact, Experience, Hero, Navbar, Projects } from './components'

const App = () => {
  return (
    <main className='min-h-screen bg-white text-gray-800 '>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Experience />
        <Contact/>
    </main>
  )
}

export default App
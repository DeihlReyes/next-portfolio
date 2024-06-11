import AboutPage from '@/components/sections/about-page'
import ContactPage from '@/components/sections/contact-page'
import LandingPage from '@/components/sections/landing-page'
import ProjectsPage from '@/components/sections/projects-pages'

export default function Home() {
  return (
    <main className='bg-[#D6D6D6]'>
      <LandingPage/>
      <AboutPage/>
      <ProjectsPage/>
      <ContactPage />
    </main>
  )
}

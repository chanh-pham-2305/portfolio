import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import BackToTop from './components/BackToTop';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <BackToTop />
      </div>
    </main>
  )
}

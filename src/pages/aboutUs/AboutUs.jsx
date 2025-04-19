import AboutContent from "./sections/aboutContent/AboutContent"
import AboutServices from "./sections/aboutServices/AboutServices"
import Counter from "./sections/counter/Counter"
import EmpoweredTeam from "./sections/empoweredTeam/EmpoweredTeam"
import Hero from "./sections/hero/Hero"
import Steps from "./sections/steps/Steps"
import Team from "./sections/team/Team"
import Vision from "./sections/vision/Vision"

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <AboutContent />
      <Vision />
      <AboutServices />
      <EmpoweredTeam />
      <Counter />
      <Steps />
      <Team />
    </div>
  )
}

export default AboutUs
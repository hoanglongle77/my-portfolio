import { myExperiences, myProjects, mySkills, myTechStack } from "@/api/data";
import AboutMe2 from "@/components/AboutMe/AboutMe2";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe2 dataSource={myTechStack} />
      <Skills title={"Certifications & Badges"} dataSource={mySkills} />
      <Projects title={"My Projects"} dataSource={myProjects} />
      <Experiences title={"Experience Timeline"} dataSource={myExperiences} />
      {/* <Contact /> */}
    </>
  );
}

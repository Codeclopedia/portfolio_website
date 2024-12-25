import ServicesButtons from "../objects/services_button";
import "../styles/project_styles.css"

export default function Projects() {
    return (
        <section id="projects" className="projects">
        <AboutTextSection/>
        <AboutProjectTypeSection/>
        </section>
    );
}

function AboutTextSection(){
    return (
      <div><h1 className="flex">Projects<p className="flex" style={{ fontFamily: "roboto" }}>.</p></h1></div>
    )
  }

function AboutProjectTypeSection(){
    return (
        <ServicesButtons listOfButtons={["Website","Applications"]}/>
    )
  }
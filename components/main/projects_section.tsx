import ServicesButtons from "../objects/services_button";
import "../styles/project_styles.css";
import '@splidejs/splide/css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <AboutTextSection />
      <AboutProjectTypeSection />
    </section>
  );
}

function AboutTextSection() {
  return (
    <div><h1 className="flex">Projects<p className="flex" style={{ fontFamily: "roboto" }}>.</p></h1></div>
  )
}

function AboutProjectTypeSection() {
  // const [typeOfProject, setTypeOfProject] = useState("websites")
  return (
    <div> <ServicesButtons  listOfButtons={["Website", "Applications"]} />
      <section className="splide" role="group" aria-label="Splide Basic HTML Example">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">Slide 01</li>
            <li className="splide__slide">Slide 02</li>
            <li className="splide__slide">Slide 03</li>
          </ul>
        </div>
      </section>
    </div>

  )
}


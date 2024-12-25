import DesignList from "../objects/project_type";
import ServicesButtons from "../objects/services_button";
import "../styles/about_section.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ['latin'], weight: '400' });
export default function About() {
  return (
    <section id="about" className="section2">
      <div className="w-full">
        <div className="flex w-full justify-between">
          <AboutTextSection/> 
          <ServicesButtons listOfButtons={["design","Development"]}/>
        </div>
        <ComputerDisplay />
      </div>
    </section>
  );
}

function AboutTextSection(){
  return (
    <div><h1 className="flex">about<p style={{ fontFamily: "roboto" }}>.</p></h1><h5>Every one of us loves something different. So, explore the world
          throlente lens orourvisua cabaotes, and the what vou love</h5></div>
  )
}

function ComputerDisplay() {
  return (
    <div className="flex justify-between items-start w-full h-min">
       <DesignList/>
    </div>
  );
}

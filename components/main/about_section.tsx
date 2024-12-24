import "../styles/about_section.css";

export default function About() {
  return (
    <section id="about" className="section2">
      
      <div className="w-full">
        <h1 className="flex bg-gradient-to-b from-[#05000d] to-white bg-clip-text">about .</h1>
        <ComputerDisplay />
      </div>
      <div className="background-container">
        <div className="background-shapes">
          {/* Add empty divs for shapes */}
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>
    </section>
  );
}

function ComputerDisplay() {
  return (
    <div className="flex justify-between items-start w-full h-full">
      <div
        className="bg-white p-[0.1rem] rounded rounded-xl w-[700px] h-[500px]"
        style={{
          clipPath:
            "polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          className="w-full h-full rounded rounded-xl bg-gradient-to-b from-[#05000d] to-gray-900"
          style={{
            clipPath:
              "polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}

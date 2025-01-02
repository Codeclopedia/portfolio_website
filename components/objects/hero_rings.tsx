import "../../app/globals.css"

function HeroRings(){
    return ( <div>
      <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url("/images/objects/grain.jpg")`}}></div>
        <div className="h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] opacity-[0.9] hero-ring"></div>
        <div className="visible sm:hidden md:visible h-[400px] w-[400px] sm:h-[800px] sm:w-[800px] opacity-[0.4] hero-ring"></div>
        <div className="h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] hero-ring"></div>
        <div className="h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] hero-ring"></div>
    </div>)
  }

  export default HeroRings;
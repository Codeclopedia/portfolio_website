import "../../app/globals.css"

function HeroRings(){
    return ( <div>
      <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url("/images/objects/grain.jpg")`}}></div>
        <div className="h-[600px] w-[600px] opacity-[0.9] hero-ring"></div>
        <div className="h-[800px] w-[800px] opacity-[0.4] hero-ring"></div>
        <div className="h-[400px] w-[400px] hero-ring"></div>
        <div className="h-[200px] w-[200px] hero-ring"></div>
    </div>)
  }

  export default HeroRings;
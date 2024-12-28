import "../../app/globals.css"

function HeroRings(){
    return ( <div>
      <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage:`url("/images/objects/grain.jpg")`}}></div>
        <div className="height-[800px] width-[400px] hero-ring"></div>
        <div className="size-[820] hero-ring"></div>
        <div className="size-[420] hero-ring"></div>
        <div className="size-[220] hero-ring"></div>
    </div>)
  }

  export default HeroRings;
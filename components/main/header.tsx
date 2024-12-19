function Header(){
    return (
      <div className="flex justify-between px-16 py-5 font-langar text-[23px] font-bold">
          Encoded
          <div className="flex headerTabs">
            <div className="cursor-pointer hover:font-bold">Home</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
          <div></div>
        </div>
    )
  }

  export default Header;
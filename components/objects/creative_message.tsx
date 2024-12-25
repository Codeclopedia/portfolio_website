const CreativeMessage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-[#05000d] p-20">
        <div className="text-center text-gray-100 text-5xl bg-gray-800 h-[500px] w-full font-bold leading-snug tracking-wide ">
          {/* Row 1 */}
          <div className="flex items-center justify-center space-x-4">
            <span>A CREATIVE</span>
            <div className="inline-block rounded-md overflow-hidden w-20 h-8">
              <img
                src="/path-to-image1.jpg"
                alt="Creative"
                className="w-full h-full object-cover"
              />
            </div>
            <span>MIND</span>
          </div>
  
          {/* Row 2 */}
          <div className="flex items-center justify-center space-x-4">
            <span>KNOWS HOW TO DO</span>
            <div className="inline-block rounded-md overflow-hidden w-16 h-8">
              <img
                src="/path-to-image2.jpg"
                alt="Pattern"
                className="w-full h-full object-cover"
              />
            </div>
            <span>THE</span>
          </div>
  
          {/* Row 3 */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center bg-lime-500 text-black rounded-full w-12 h-12">
              ↗
            </div>
            <span>RIGHT THING AT</span>
          </div>
  
          {/* Row 4 */}
          <div className="flex items-center justify-center space-x-4">
            <span>THE RIGHT PLACE AND</span>
          </div>
  
          {/* Row 5 */}
          <div className="flex items-center justify-center space-x-4">
            <div className="inline-block rounded-md overflow-hidden w-20 h-8">
              <img
                src="/path-to-image3.jpg"
                alt="Design"
                className="w-full h-full object-cover"
              />
            </div>
            <span>THE RIGHT TIME</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreativeMessage;
  
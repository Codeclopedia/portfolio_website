// pages/discuss-ideas.js
export default function DiscussIdeas() {
    return (
      <div id="contact" className="min-h-screen flex flex-col justify-center items-center bg-black bg-gradient-to-b from-gray-900 to-[#05000d]">
        {/* Main Card Section */}
        <div className="bg-lime-500 text-center w-full max-w-5xl rounded-b-[100px] py-20 px-10 relative">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-12">
            LET’S DISCUSS <br /> YOUR IDEAS
          </h1>
  
          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="bg-black text-lime-500 font-semibold text-lg py-3 px-8 rounded-full hover:bg-lime-600 hover:text-black transition">
              TALKS NOW
            </button>
            <button className="border-2 border-black text-black font-semibold text-lg py-3 px-8 rounded-full hover:bg-black hover:text-lime-500 transition">
              FOLLOW US
            </button>
          </div>
  
          {/* Subtle Stars Line (Optional Decorative) */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 text-black opacity-40">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
  
        {/* Footer Text */}
        <div className="mt-10 text-lime-500 text-xl font-semibold">
          Das Grüne
        </div>
      </div>
    );
  }
  
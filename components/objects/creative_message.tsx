


const CreativeMessage = () => {
  return (
    <div className="flex items-center  justify-center h-[300px] sm:h-[500px] bg-gradient-to-b from-gray-900 to-[#05000d] p-6">
      <div className="flex items-center justify-center text-gray-100 bg-gray-800 p-4 sm:p-28 w-full font-bold">
        <p
          className="text-justify leading-tight"
          style={{
            fontSize: "2rem", // Dynamically adjusts font size
            lineHeight: "1.1", // Close line spacing for compact wrapping
            textAlign: "justify", // Ensures even spacing on both sides
            textJustify: "inter-word", // Spreads text evenly to fill the width
            wordSpacing:"3px",
          }}
        >{`You have to hurt in order to know. Fall in order to grow. Lose in order to gain. Because most of life's lessons are learned in pain.`}</p>
      </div>
    </div>
  );
};

export default CreativeMessage;

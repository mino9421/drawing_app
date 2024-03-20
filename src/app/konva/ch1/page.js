"use client";
import OptionSelector from "@/components/OptionSelector";
import DrawingCanvas from "@/components/DrawingCanvas";
import dynamic from "next/dynamic";
import { useState } from "react";

const Canvas = dynamic(() => import("../../../components/Canvas"), {
  ssr: false,
});

// Define sample options
const sampleOptions = [
  {
    label: "Option 1",
    image: "https://via.placeholder.com/150", // Sample placeholder image URL
  },
  {
    label: "Option 2",
    image: "https://via.placeholder.com/150", // Sample placeholder image URL
  },
  {
    label: "Option 3",
    image: "https://via.placeholder.com/150", // Sample placeholder image URL
  },
  {
    label: "Option 4",
    image: "https://via.placeholder.com/150", // Sample placeholder image URL
  },
];

export default function Page(props) {
  // State to store the selected option
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle option selection
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-slate-800 text-xl text-green-600">
      <div className="">
        <OptionSelector
          options={sampleOptions}
          onSelectOption={handleSelectOption}
        />
      </div>
      <div>
        {selectedOption && (
          <DrawingCanvas backgroundImage={selectedOption.image} />
        )}
      </div>
    </div>
  );
}

import React from "react";

const OptionSelector = ({ options, onSelectOption }) => {
  return (
    <div className="option-selector">
      <h2>Select an Option:</h2>
      <div className="columns-2">
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => onSelectOption(option)}
          >
            <img src={option.image} alt={option.label} />
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;

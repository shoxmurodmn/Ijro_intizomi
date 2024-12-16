import React, { useState } from "react";
import { LuGlobe  } from "react-icons/lu";

const Dropdowns = () => {

  const languch = ['uz' ,'ru']

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
  
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        <LuGlobe   style={{ marginRight: "4px" , fontSize: "24px"}} />
        {selectedLanguage}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul 
          style={{
            position: "absolute",
            top: "40px",
            right: "0",
            background: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            listStyle: "none",
            padding: "8px 0",
            margin: 0,
            zIndex: 10,
          }}
        >
          {languch.map((lang) => (
            <li
              key={lang}
              onClick={() => selectLanguage(lang)}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                fontSize: "14px",
                textAlign: "left",
                color: "#333",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "white")
              }
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdowns;
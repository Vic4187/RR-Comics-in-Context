import React, { useContext } from "react";
import StyleContext from "./StyleContext";

function RequestFormButton() {
  const buttonStyling = useContext(StyleContext);

  return (
    <div>
      <button style={buttonStyling} type="submit">
        Submit
      </button>
    </div>
  );
}

export default RequestFormButton;

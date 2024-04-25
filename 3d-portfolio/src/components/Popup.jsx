import React from "react";

const renderPopup = {
  1: <h1>1</h1>,
  2: <h1>2</h1>,
  3: <h1>3</h1>,
};
const Popup = ({ currentStage }) => {
  return renderPopup[currentStage] || null;
};

export default Popup;

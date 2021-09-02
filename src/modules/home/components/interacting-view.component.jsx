import React from "react";

import TargetInfo from "./target-info.component.jsx";
import InteractingContent from "./interacting-content.component.jsx";

function InteractingView() {
  return (
    <div className="container pt-3">
      <TargetInfo />
      <InteractingContent />
    </div>
  );
}

export default InteractingView;

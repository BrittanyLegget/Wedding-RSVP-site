/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */

import React from "react";

function Spinner({ size, color }) {
  size = size || 12;
  color = "#E5E5E5" || "#E5E5E5";

  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
}

export default Spinner;

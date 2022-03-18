import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { Place, Translate } from "@mui/icons-material";

const Map = ({ text }) => {
  return (
    <div
      style={{
        position: "absolute",
        color: "red",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -100%)",
      }}
    >
      <Place />
    </div>
  );
};

export default Map;

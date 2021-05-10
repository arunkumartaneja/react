import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

const getSession = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const session = getSession(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[session];

  return (
    <div className={`season-display ${session}`}>
      <i className={`${iconName} icon icon-left massive`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon icon-right massive`} />
    </div>
  );
};

export default SeasonDisplay;

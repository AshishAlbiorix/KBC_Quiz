import React, { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = React.useState(30);  
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOM!");
    }
  });
  return <div>{seconds}</div>;
}
export default Timer;

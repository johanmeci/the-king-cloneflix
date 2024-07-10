import React from "react";
import Button from "../button/button";

interface GetStartedProps {
  text: string;
  label: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ text, label }) => {
  return (
    <div>
      <h3>{text}</h3>
      <Button text={label} />
    </div>
  )
}

export default GetStarted;
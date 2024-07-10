import React from "react";
import Button from "../button/button";
import styles from "./style.module.css";
import ArrowIcon from "../icons/ArrowIcon";

interface GetStartedProps {
  text: string;
  label: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ text, label }) => {
  return (
    <div className={styles.sectionGetStarted}>
      <h3 className={styles.text}>{text}</h3>
      <div className={styles.containerForm}>
        <div className={styles.formControl}>
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" />
        </div>
        <Button text={label} icon={<ArrowIcon/>} />
      </div>
    </div>
  )
}

export default GetStarted;
import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={styles.button} type="button" {...rest}>
      {text}
    </button>
  )
}

export default Button;
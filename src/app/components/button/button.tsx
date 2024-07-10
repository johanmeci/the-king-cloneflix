import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, icon, ...rest }) => {
  return (
    <button className={styles.button} type="button" {...rest}>
      {text}
      {icon}
    </button>
  )
}

export default Button;
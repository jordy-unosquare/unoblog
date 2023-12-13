import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
   text: string;
   url: string
}

const Button = ({ text, url }:ButtonProps) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
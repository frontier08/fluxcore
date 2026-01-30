"use client";
import styles from "./page.module.css";
import { Button, Input } from "lambda-ui-components";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button color="primary" size="medium">Button</Button>
      <Input />
    </div>
  );
}

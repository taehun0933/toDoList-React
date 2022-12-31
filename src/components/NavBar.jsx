import React from "react";
import styles from "../CSS/NavBar.module.css";
import { TiWeatherSunny } from "react-icons/ti";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <button className={styles.darkModeIcon}>
        <TiWeatherSunny />
      </button>
      <ul className={styles.filters}>
        <li>
          <button className={styles.filter}>All</button>
        </li>
        <li>
          <button className={styles.filter}>Active</button>
        </li>
        <li>
          <button className={styles.filter}>Completed</button>
        </li>
      </ul>
    </div>
  );
}

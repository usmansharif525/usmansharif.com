import React from "react";
// import classNames from "classnames";
import * as styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}><span className={styles.logo_highlight}>Usman</span> Sharif</div>
    );
};

export default Logo;
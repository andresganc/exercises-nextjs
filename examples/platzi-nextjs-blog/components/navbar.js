import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/about">
        <a>
          <img
            src="/images/about.png"
            alt="about"
            className={styles.iconStyle}
          />
        </a>
      </Link>
      <a
        href="https://github.com/nicosaporiti"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/github.png"
          alt="githubIcon"
          className={styles.iconStyle}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-jorge-saporiti-1619391a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/linkedin.png"
          alt="linkedIN"
          className={styles.iconStyle}
        />
      </a>
      <a href="mailto:nicolas@saporiti.cl?subject=Contacto%20desde%20Blog">
        <img src="/images/email.png" alt="email" className={styles.iconStyle} />
      </a>
    </div>
  );
};

export default navbar;

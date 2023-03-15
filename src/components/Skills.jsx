import React from "react";
// images
import html_Logo from "../img/htmlLogo.png";
import css_Logo from "../img/CssLogo.png";
import js_Logo from "../img/JavaScript-logo.png";
import react_Logo from "../img/React-icon.png";
import reduxToolkit_Logo from "../img/reduxlogo.png";
import FireBase_logo from "../img/Firebase_Logo.png";
import mySQL_logo from "../img/MySql_logo.png";
import sassLogo from "../img/Sass_logo.png";
import Bootstrap_Logo from "../img/Bootstrap_logo.png";
import Tailwind_logo from "../img/tailwind-css-icon.png";
import nextJs from "../img/nextJs_logo.png";
import javaLogo from "../img/java_Logo.png"
//styles and utilities
import styles from "@/styles/Home.module.css";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Skills = () => {
  const SkillImg = [
    { img: html_Logo, name: "HTML" },
    { img: css_Logo, name: "CSS" },
    { img: js_Logo, name: "JavaScript" },
    { img: react_Logo, name: "React.js" },
    { img: nextJs, name: "Next.js" },
    { img: reduxToolkit_Logo, name: "Redux-Toolkit" },
    { img: sassLogo, name: "Sass" },
    {
      img: Tailwind_logo,
      name: "Tailwind",
    },
    { img: Bootstrap_Logo, name: "Bootstrap" },
    { img: FireBase_logo, name: "Firebase" },
    {img:javaLogo, name: "Java"},
    { img: mySQL_logo, name: "MySQL" },
  ];
  const [t, i18] = useTranslation("global");
  return (
    <div className="container mt-3">
      <div className={`text-center`} id="skills">
        <h1 className={styles.titleSkill}>
          {t("tech-stack.title")} <span className={styles.checkIcon}>✔</span>{" "}
        </h1>
        <p className={styles.textSkill}>{t("tech-stack.text")}</p>
      </div>

      <div className={`container ${styles.skills} row `}>
        {SkillImg.map((item, index) => {
          return (
            <div className=" d-flex col justify-content-center container" key={index}>
              <div className={`${styles.imgCarrousel} `}>
                <Image src={item.img} alt="" />
                <h6 className={`text-center ${styles.textSkill} mt-2`}>
                  {item.name}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

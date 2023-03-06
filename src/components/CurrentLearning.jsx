import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import tSLogo from "../img/tsLogo.png";
import react_Logo from "../img/React-icon.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Home.module.css";
const CurrentLerning = () => {
  const [t, i18] = useTranslation("global");
  return (
    <div className="container">
      <h5 className={`${styles.currentLearningText}  text-center`}>
        {t("current-lerning.title")}🤓
      </h5>
      <div className="row justify-content-center align-items-center mt-5 gap-5 ">
        <div className={`${styles.image}  col-md-4 col-xs-12 col-sm-12 ` }>
          <div>
            <Image src={react_Logo} alt="" />{" "}
          </div>

          <div className={styles.currentText}>
            <span className={styles.reactText}>React Native</span>
          </div>
          <ProgressBar now={20} className={`${styles.progress}   mb-5`} />
        </div>
        <div className={`${styles.image}  col-md-4 col-xs-12 col-sm-12 ` }>
          <div className="current-image">
            <Image src={tSLogo} alt="" />
          </div>

          <div className="current-text ">
            <span className={styles.TypeScriptText}>TypeScript</span>
          </div>
          <ProgressBar now={20} className={`${styles.progress}  mb-5`} />
        </div>
      </div>
    </div>
  );
};

export default CurrentLerning;

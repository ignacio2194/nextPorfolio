import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import img from "../../src/img/bnr-1.png";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion"
// icons
import { AiOutlineArrowDown } from "react-icons/ai";
const Banner = () => {
    const [state, setState] = useState({
        titleOne: "Hi",
        titleTwo: "Im",
        titleThree: "Ignacio",
      });
      const [t,i18]= useTranslation("global")
  return (
    <div>
    <div className={`${styles.bannerContainer}` }id="home">
      <div className={`${styles.bannerContainerText}`}>
        <h1>{t("banner-title.hi-im")}</h1>
      </div>

      <div  className={`${styles.Typewriter__wrapper}`}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [t("banner-typewriter.hi-im")],
          }}
        />
    
      </div>
      <div className="banner_text text-center">
      <h5>{t("banner-text.hi-im")}</h5>
      </div>

      <div className={`${styles.information} container   d-flex justify-content-center align-items-center gap-2`}>
        <div className={`${styles.information_aboutMe} container d-inline w-100 `}>
          <div className={`${styles.information_aboutMe_title}  text-center text-light`}>
            <h2>{t("aboutme-title.hi-im")}</h2>
            <span>
              <AiOutlineArrowDown className={`${styles.informationIcon} mb-2 `}/>
            </span>
          </div>
          <motion.div className="information_aboutMe_text  text-justify ">
            <h5>
            {t("aboutme-text.hi-im")}
            </h5>
          </motion.div>
        </div>

        <motion.div  animate={{x:-10}}    transition={{
    opacity: { ease: "linear" },
    layout: { duration: 2 },
  
  }} className="information_img p-2 d-none d-lg-block ">
          <Image src={img} alt="" />
        </motion.div>
      </div>
    </div>
  </div>
);

  
}

export default Banner
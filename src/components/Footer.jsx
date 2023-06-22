import React, { useEffect, useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Home.module.css";
const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const fecha = new Date("2023-6-10");
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth() + 1;
  const añoActual = fecha.getFullYear();

  const [date, setDate] = useState({});

  useEffect(() => {
    setDate({ hoy, mesActual, añoActual });
  }, [hoy, mesActual, añoActual]);

  return (
    <div className={`${styles.footer} container-fluid `}>
      <div className={styles.contact}>
        <div className="row">
          <div>
            <p className="text-center text-light mt-2">🤙{t("footer.title")}</p>
          </div>
          <div
            className={`${styles.contactIcon}  ml-4 col-md-12 col-xs-12 col-sm-12 text-center `}
          >
            <a
              href="https://www.linkedin.com/in/ignaciobntz/"
              className="link-icon text-light "
            >
              <AiFillLinkedin />
              <span className="link-icon text-light">ignaciobntz</span>
            </a>
          </div>
          <div
            className={`${styles.contactIcon} ml-4 col-md-12 col-xs-12 col-sm-12 text-center `}
          >
            <a
              href="https://github.com/ignacio2194"
              className="link-icon text-light "
            >
              <AiFillGithub />
              <span className="link-icon text-light "> ignacio2194</span>
            </a>
          </div>
          <div className="contact-icon col-md-12 col-xs-12 col-sm-12  text-center mb-3 ">
            <a className="link-icon text-light">
              <HiOutlineMail />
            </a>
            <span className="link-icon text-light">
              ignaciobeniteznacho@outlook.com
            </span>
          </div>
        </div>
        <div
          className={`${styles.lastUpdated}  d-flex justify-content-between align-items-center m-0 m-auto`}
        >
          <span className="text-light last-updated-text">
            {" "}
            {` ${t("footer.LastUpdated")} ${date.hoy}/${date.mesActual}/${date.añoActual}`}
          </span>
          <span className="text-light ">
           {`${t("footer.TecnologyUsed")}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

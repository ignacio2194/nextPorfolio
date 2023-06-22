import Nav from "react-bootstrap/Nav";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Navbr from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Home.module.css";


const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Navbr
      className={`${styles.Nav} navbar navbar-expand-lg navbar-light`}
      expand="lg"
    >
      <Container>
        <Navbr.Toggle aria-controls="basic-Navbr-nav" />
        <Navbr.Collapse id="basic-Navbr-nav">
          <Nav className="me-auto navbar-nav w-100 ">
            <Nav.Link href="https://www.linkedin.com/in/ignaciobntz/">
              {" "}
              <FaLinkedinIn className={styles.iconsItem} />
            </Nav.Link>
            <Nav.Link href="https://github.com/ignacio2194">
              <AiFillGithub className={styles.iconsItem} />
            </Nav.Link>
            <Nav.Link href="#home" className="mt-3">
              {t("navBar.Home")}
            </Nav.Link>
            <Nav.Link href="#skills" className="mt-3">
              {t("navBar.Skills")}
            </Nav.Link>
            <Nav.Link href="#projects" className="mt-3">
              {t("navBar.Projects")}
            </Nav.Link>
            <div className="w-100"></div>
            <Nav.Item className={`${styles.language_container} text-light`}>
              <div
                className={`${styles.languaje_container_btn}  d-flex gap-2 mt-3`}
              >
                <button
                  onClick={() => i18n.changeLanguage("es")}
                  className={`${styles.btnEs}  btn btn-outline-secondary text-white`}
                >
                  ES
                </button>
                <button
                  onClick={() => i18n.changeLanguage("en")}
                  className={`${styles.btnEn}  btn btn-outline-secondary text-white `}
                >
                  EN
                </button>

                <Nav.Link
                  href="https://drive.google.com/file/d/10D5CaKIIioYjKL_7WEnthdtH3yr-w3Sq/view?usp=sharing"
                  className={`${styles.btnCv}  btn btn-outline-secondary text-white`}
                >
                  {" "}
                  {t("navBar.button-cv")}
                </Nav.Link>
              </div>
            </Nav.Item>
          </Nav>
        </Navbr.Collapse>
      </Container>
    </Navbr>
  );
};

export default Navbar;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import SabDeLaTierra from '../img/saborsdelatierra.png'
import libraryAppProject from "../img/libraryAppProject.png";
import rickAndMortyProject from "../img/rickAndMortyProject.jpg";
import BarberApp from "../img/BarberApp.png";

import styles from "@/styles/Home.module.css"; 
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [t, i18] = useTranslation("global");
  const projects = [
    {
      name:  t("projects-title-card.sabDeLaTierra"),
      img: SabDeLaTierra,
      description:
      t("projects-text-card.sabDeLaTierra"),
      link: "https://saboresdelatierra.vercel.app/",
    },
    {
      name: t("projects-title-card.library-app"),
      img: libraryAppProject,
      description:
      t("projects-text-card.library-app"),
      link: "https://libraryapp-skillfactory.vercel.app/",
    },
    {
      name: t("projects-title-card.Rick-and-Morty"),
      img: rickAndMortyProject,
      description:
      t("projects-text-card.Rick-and-Morty"),
      link: "https://rick-and-morty-app-beige.vercel.app/",
    },
    {
      name: t("projects-title-card.BarberApp"),
      img: BarberApp,
      description: 
      t("projects-text-card.BarberApp"),
      link: "https://app-barberia-peluqueria.netlify.app/",
    },

  ];
  return (
    <div className="container mt-3" id="projects">
      <div className="text-center">
        <h1 className={styles.projectsTitle}>{t("projects-title.title")} 📚</h1>
      </div>
      <div className={` ${styles.CardsContainer} row justify-content-center align-items-center text-center gap-4 mb-5`}>
        {projects.map((project, index) => {
           
          return (
            <Card
              key={index}
              className={`${styles.cardsProjects} col-md-12 col-xs-12 col-sm-12`} 
            >
              <Card.Img
                variant="top"
                src={project.img.src}
                alt="project images"
                className={`${styles.projectImages} ${styles.projectImage} text-justify`}
             
              />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text className="project-description text-justify">
                  {project.description}
                </Card.Text>

                <a href={project.link}>
                  <Button className="btn-card p-2">     {t("button-card.button-text")}😎</Button>
                </a>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
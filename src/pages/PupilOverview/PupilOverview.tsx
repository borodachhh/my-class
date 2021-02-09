import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import PupilsSelector from "../../components/PupilsSelector/PupilsSelector";
import { usePupil } from "../../hooks/usePupil";
import styles from "./PupilOverview.module.scss";

const PupilOverview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pupil = usePupil(id);

  return (
    <>
    <Helmet>
      <title>{pupil.name}</title>
    </Helmet>
      <div className={styles["pupil-overview"]}>
        <div className={styles["header"]}>
          <h1 className={styles["header__heading"]}>Overview</h1>
          <PupilsSelector className={styles["header__select"]} />
          <NavLink className={styles["header__back-link"]} to="/">{"<<< back"}</NavLink>
        </div>

        <div className={styles["body"]}>
          <div
            className={`${styles["info-card"]} box box--left-bottom is-narrow`}>
            <div className={styles["passport"]}>
              <div className={styles["passport__info"]}>
                <h2 className={styles["passport__name"]}>{pupil.name}</h2>
                <h3 className={styles["passport__email"]}>{pupil.email}</h3>
                <p className={styles["passport__grade"]}>Grade: 11</p>
              </div>
              <div className={styles["passport__avatar-wrap"]}>
                <img
                  className={styles["passport__avatar"]}
                  src={pupil.avatarLink}
                  alt="avatar"
                />
              </div>
            </div>
            <div className={styles["description"]}>
              <h4 className={styles["description__heading"]}>Description:</h4>
              <p>{pupil.description}</p>
            </div>
          </div>
          <div
            className={`${styles["grades-table"]} box box--right-bottom is-fluid`}>
            <div className={styles["grades-table__header"]}>
              <h3 className={styles["grades-table__heading"]}>
                Table of grades
              </h3>
            </div>
            <div className={styles["grades-table__table"]}>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Quoter</th>
                    <th colSpan={5}>Subject</th>
                  </tr>
                  <tr>
                    <th>Math</th>
                    <th>Russian</th>
                    <th>Literature</th>
                    <th>History</th>
                    <th>Physics</th>
                  </tr>
                </thead>
                <tbody>
                  {pupil.grades.map((quoter, index) => (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{quoter.math}</td>
                        <td>{quoter.russian}</td>
                        <td>{quoter.literature}</td>
                        <td>{quoter.history}</td>
                        <td>{quoter.physics}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PupilOverview;

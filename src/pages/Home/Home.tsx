import React from "react";
import PupilsSelector from "../../components/PupilsSelector/PupilsSelector";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles["home"]}>
        <div className={`font--semi-bold ${styles["proposal"]}`}>
          Hello,
          <br />
          choose
          <br />
          a pupil
          <br />
          you want
          <br />
          to check
          <br />
          out.
        </div>
        <PupilsSelector className={styles['select']} />
      </div>
      <div className={styles["watermark"]}>
        Made by <span>Ayyar Khalilov</span>
      </div>
    </>
  );
};

export default Home;

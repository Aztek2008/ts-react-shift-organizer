import styles from './HoursLine.module.css';

const liEl = () => (
  <li id='1' className={`${styles.li} ${styles.complete}`}>
    <div className={styles.status}>
      <span className={styles.hours}></span>
      <span className={styles.timeMark}>0</span>
    </div>
  </li>
);

const HoursLine = () => {
  return (
    <div className={styles.lineContainer}>
      <ul className={styles.timeline} id='timeline'>
        <li id='1' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
            <span className={styles.timeMark}>0</span>
          </div>
        </li>

        <li id='2' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='3' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='4' className={styles.li}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
            <span className={styles.timeMark}>6</span>
          </div>
        </li>

        <li id='5' className={styles.li}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='6' className={styles.li}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='7' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
            <span className={styles.timeMark}>12</span>
          </div>
        </li>

        <li id='8' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='9' className={`${styles.li} ${styles.complete}`}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='10' className={styles.li}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
            <span className={styles.timeMark}>18</span>
          </div>
        </li>

        <li id='11' className={styles.li}>
          <div className={styles.status}>
            <span className={styles.hours}></span>
          </div>
        </li>

        <li id='12' className={styles.li}>
          <div className={styles.status}>
            <span className={`${styles.hours}`}></span>
            <span className={styles.timeMarkLast}>24</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HoursLine;

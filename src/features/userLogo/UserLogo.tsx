import { useAppSelector } from 'app/hooks';
import styles from './UserLogo.module.css';

const UserLogo = () => {
  const { userName } = useAppSelector((state) => state.users.user);

  return (
    <div className={styles.userLogoContainer}>
      <span className={styles.userWelcome}>Welcome, {userName}</span>
      <div className={`${styles.avatar} ${styles.womenPos}`}></div>
    </div>
  );
};

export default UserLogo;

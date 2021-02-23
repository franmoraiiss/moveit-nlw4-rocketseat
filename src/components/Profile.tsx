import styles from '../styles/components/Profile.module.css';

export function Profile() {
   return(
      <div className={styles.profileContainer}>
         <img src="https://github.com/franmoraiiss.png" alt="Francisco Morais"/>
         <div>
            <strong>Francisco Morais</strong>
            <p>
               <img src="icons/level.svg" alt="Level"/>
               Level 1
            </p>
         </div>
      </div>
   );
}
import styles from '../styles/components/SideBar.module.css'

export function SideBar() {
   return (
      <nav className={styles.sidenav}>
         <div>
            <a className={styles.sidenavLogo} href="">
               <img className={styles.sidenavlogo} src="/logo.svg" alt="Logo move.it"/>
            </a> 
         </div>

         <ul>
            <li className={styles.active}>
               <a href=""><img src="/icons/home.svg" alt="Home"/></a>
            </li>
            <li>
               <a href=""><img src="/icons/ranking.svg" alt="Ranking"/></a>
            </li>
         </ul>
      </nav>
   );
}